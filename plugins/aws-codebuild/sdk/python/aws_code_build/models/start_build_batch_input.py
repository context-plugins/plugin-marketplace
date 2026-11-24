from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.compute_type_override_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .enums.environment_type_override_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .enums.image_pull_credentials_type_override_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .enums.source_type_override_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .environment_variable_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .git_submodules_config import GitSubmodulesConfig, GitSubmodulesConfigDict
from .logs_config import LogsConfig, LogsConfigDict
from .project_artifacts import ProjectArtifacts, ProjectArtifactsDict
from .project_build_batch_config import ProjectBuildBatchConfig, ProjectBuildBatchConfigDict
from .project_cache import ProjectCache, ProjectCacheDict
from .project_source_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .project_source_version import ProjectSourceVersion, ProjectSourceVersionDict
from .registry_credential import RegistryCredential, RegistryCredentialDict
from .source_auth_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)


class StartBuildBatchInput(SdkBaseModel):
    project_name: str = Field(alias="projectName")
    """The name of the project."""

    secondary_sources_override: Optional[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="secondarySourcesOverride")
    """An array of ProjectSource objects that override the secondary sources defined in the batch build project."""

    secondary_sources_version_override: Optional[list[ProjectSourceVersion]] = Field(
        default=UNSET, alias="secondarySourcesVersionOverride"
    )
    """An array of ProjectSourceVersion objects that override the secondary source versions in the batch build
    project."""

    source_version: Optional[str] = Field(default=UNSET, alias="sourceVersion")
    """The version of the batch build input to be built, for this build only. If not specified, the latest version is
    used. If specified, the contents depends on the source provider: CodeCommit The commit ID, branch, or Git tag to
    use. GitHub The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source
    code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example
    pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's
    HEAD commit ID is used. Bitbucke"""

    artifacts_override: Optional[ProjectArtifacts] = Field(default=UNSET, alias="artifactsOverride")
    secondary_artifacts_override: Optional[list[ProjectArtifacts]] = Field(
        default=UNSET, alias="secondaryArtifactsOverride"
    )
    """An array of ProjectArtifacts objects that override the secondary artifacts defined in the batch build project."""

    environment_variables_override: Optional[
        list[EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="environmentVariablesOverride")
    """An array of EnvironmentVariable objects that override, or add to, the environment variables defined in the batch
    build project."""

    source_type_override: Optional[SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="sourceTypeOverride"
    )
    """The source input type that overrides the source input defined in the batch build project."""

    source_location_override: Optional[str] = Field(default=UNSET, alias="sourceLocationOverride")
    """A location that overrides, for this batch build, the source location defined in the batch build project."""

    source_auth_override: Optional[SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = Field(
        default=UNSET, alias="sourceAuthOverride"
    )
    git_clone_depth_override: Optional[int] = Field(default=UNSET, alias="gitCloneDepthOverride")
    """The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any
    previous depth of history defined in the batch build project."""

    git_submodules_config_override: Optional[GitSubmodulesConfig] = Field(
        default=UNSET, alias="gitSubmodulesConfigOverride"
    )
    buildspec_override: Optional[str] = Field(default=UNSET, alias="buildspecOverride")
    """A buildspec file declaration that overrides, for this build only, the latest one already defined in the build
    project. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec
    file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The
    bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN
    (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty
    string, the source code mu"""

    insecure_ssl_override: Optional[bool] = Field(default=UNSET, alias="insecureSslOverride")
    """Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure
    SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override
    applies only if the build's source is GitHub Enterprise."""

    report_build_batch_status_override: Optional[bool] = Field(default=UNSET, alias="reportBuildBatchStatusOverride")
    """Set to true to report to your source provider the status of a batch build's start and completion. If you use this
    option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is
    thrown. The status of a build triggered by a webhook is always reported to your source provider."""

    environment_type_override: Optional[
        EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr
    ] = Field(default=UNSET, alias="environmentTypeOverride")
    """A container type for this batch build that overrides the one specified in the batch build project."""

    image_override: Optional[str] = Field(default=UNSET, alias="imageOverride")
    """The name of an image for this batch build that overrides the one specified in the batch build project."""

    compute_type_override: Optional[ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="computeTypeOverride"
    )
    """The name of a compute type for this batch build that overrides the one specified in the batch build project."""

    certificate_override: Optional[str] = Field(default=UNSET, alias="certificateOverride")
    """The name of a certificate for this batch build that overrides the one specified in the batch build project."""

    cache_override: Optional[ProjectCache] = Field(default=UNSET, alias="cacheOverride")
    service_role_override: Optional[str] = Field(default=UNSET, alias="serviceRoleOverride")
    """The name of a service role for this batch build that overrides the one specified in the batch build project."""

    privileged_mode_override: Optional[bool] = Field(default=UNSET, alias="privilegedModeOverride")
    """Enable this flag to override privileged mode in the batch build project."""

    build_timeout_in_minutes_override: Optional[int] = Field(default=UNSET, alias="buildTimeoutInMinutesOverride")
    """Overrides the build timeout specified in the batch build project."""

    queued_timeout_in_minutes_override: Optional[int] = Field(default=UNSET, alias="queuedTimeoutInMinutesOverride")
    """The number of minutes a batch build is allowed to be queued before it times out."""

    encryption_key_override: Optional[str] = Field(default=UNSET, alias="encryptionKeyOverride")
    """The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project.
    The CMK key encrypts the build output artifacts. You can use a cross-account KMS key to encrypt the build output
    artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of
    the CMK or, if available, the CMK's alias (using the format alias/)."""

    idempotency_token: Optional[str] = Field(default=UNSET, alias="idempotencyToken")
    """A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuildBatch request. The
    token is included in the StartBuildBatch request and is valid for five minutes. If you repeat the StartBuildBatch
    request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error."""

    logs_config_override: Optional[LogsConfig] = Field(default=UNSET, alias="logsConfigOverride")
    registry_credential_override: Optional[RegistryCredential] = Field(
        default=UNSET, alias="registryCredentialOverride"
    )
    image_pull_credentials_type_override: Optional[
        ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr
    ] = Field(default=UNSET, alias="imagePullCredentialsTypeOverride")
    """The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values: CODEBUILD
    Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust
    CodeBuild's service principal. SERVICE_ROLE Specifies that CodeBuild uses your build project's service role. When
    using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild
    curated image, you must use CODEBUILD credentials."""

    build_batch_config_override: Optional[ProjectBuildBatchConfig] = Field(
        default=UNSET, alias="buildBatchConfigOverride"
    )
    debug_session_enabled: Optional[bool] = Field(default=UNSET, alias="debugSessionEnabled")
    """Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build
    in Session Manager. Batch session debugging is not supported for matrix batch builds."""


class StartBuildBatchInputDict(TypedDict):
    project_name: str
    secondary_sources_override: NotRequired[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    ]
    secondary_sources_version_override: NotRequired[list[ProjectSourceVersionDict]]
    source_version: NotRequired[str]
    artifacts_override: NotRequired[ProjectArtifactsDict]
    secondary_artifacts_override: NotRequired[list[ProjectArtifactsDict]]
    environment_variables_override: NotRequired[
        list[EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    ]
    source_type_override: NotRequired[SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    source_location_override: NotRequired[str]
    source_auth_override: NotRequired[SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    git_clone_depth_override: NotRequired[int]
    git_submodules_config_override: NotRequired[GitSubmodulesConfigDict]
    buildspec_override: NotRequired[str]
    insecure_ssl_override: NotRequired[bool]
    report_build_batch_status_override: NotRequired[bool]
    environment_type_override: NotRequired[EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    image_override: NotRequired[str]
    compute_type_override: NotRequired[ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    certificate_override: NotRequired[str]
    cache_override: NotRequired[ProjectCacheDict]
    service_role_override: NotRequired[str]
    privileged_mode_override: NotRequired[bool]
    build_timeout_in_minutes_override: NotRequired[int]
    queued_timeout_in_minutes_override: NotRequired[int]
    encryption_key_override: NotRequired[str]
    idempotency_token: NotRequired[str]
    logs_config_override: NotRequired[LogsConfigDict]
    registry_credential_override: NotRequired[RegistryCredentialDict]
    image_pull_credentials_type_override: NotRequired[
        ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr
    ]
    build_batch_config_override: NotRequired[ProjectBuildBatchConfigDict]
    debug_session_enabled: NotRequired[bool]
