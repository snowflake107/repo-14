package org.openrewrite.maven;

import static com.soebes.itf.extension.assertj.MavenITAssertions.assertThat;

import com.soebes.itf.jupiter.extension.MavenCLIOptions;
import com.soebes.itf.jupiter.extension.MavenJupiterExtension;
import com.soebes.itf.jupiter.extension.MavenOption;
import com.soebes.itf.jupiter.extension.MavenTest;
import com.soebes.itf.jupiter.maven.MavenExecutionResult;

@MavenJupiterExtension
public class BasicIT {

    @MavenTest
    @MavenOption(MavenCLIOptions.NO_TRANSFER_PROGRESS)
    void groupid_artifactid_should_be_ok(MavenExecutionResult result) {
        assertThat(result)
                .isSuccessful();
//                .out()
//                .warn()
//                .containsOnly("JAR will be empty - no content was marked for inclusion!");
    }

}
