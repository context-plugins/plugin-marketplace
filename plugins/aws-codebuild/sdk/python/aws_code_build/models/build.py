from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .auto_retry_config import AutoRetryConfig, AutoRetryConfigDict
from .build_artifacts import BuildArtifacts, BuildArtifactsDict
from .build_phase import BuildPhase, BuildPhaseDict
from .debug_session import DebugSession, DebugSessionDict
from .enums.build_status import BuildStatusOrStr
from .exported_environment_variable import ExportedEnvironmentVariable, ExportedEnvironmentVariableDict
from .logs_location import LogsLocation, LogsLocationDict
from .network_interface import NetworkInterface, NetworkInterfaceDict
from .project_cache import ProjectCache, ProjectCacheDict
from .project_environment_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .project_file_system_location import ProjectFileSystemLocation, ProjectFileSystemLocationDict
from .project_source_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .project_source_version import ProjectSourceVersion, ProjectSourceVersionDict
from .vpc_config import VpcConfig, VpcConfigDict


class Build(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique ID for the build."""

    arn: Optional[str] = UNSET
    """The Amazon Resource Name (ARN) of the build."""

    build_number: Optional[int] = Field(default=UNSET, alias="buildNumber")
    """The number of the build. For each project, the buildNumber of its first build is 1. The buildNumber of each
    subsequent build is incremented by 1. If a build is deleted, the buildNumber of other builds does not change."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the build process started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the build process ended, expressed in Unix time format."""

    current_phase: Optional[str] = Field(default=UNSET, alias="currentPhase")
    """The current build phase."""

    build_status: Optional[BuildStatusOrStr] = Field(default=UNSET, alias="buildStatus")
    """The current status of the build. Valid values include: FAILED: The build failed. FAULT: The build faulted.
    IN_PROGRESS: The build is still in progress. STOPPED: The build stopped. SUCCEEDED: The build succeeded. TIMED_OUT:
    The build timed out."""

    source_version: Optional[str] = Field(default=UNSET, alias="sourceVersion")
    """Any version identifier for the version of the source code to be built. If sourceVersion is specified at the
    project level, then this sourceVersion (at the build level) takes precedence. For more information, see Source
    Version Sample with CodeBuild in the CodeBuild User Guide."""

    resolved_source_version: Optional[str] = Field(default=UNSET, alias="resolvedSourceVersion")
    """An identifier for the version of this build's source code. For CodeCommit, GitHub, GitHub Enterprise, and
    BitBucket, the commit ID. For CodePipeline, the source revision provided by CodePipeline. For Amazon S3, this does
    not apply."""

    project_name: Optional[str] = Field(default=UNSET, alias="projectName")
    """The name of the CodeBuild project."""

    phases: Optional[list[BuildPhase]] = UNSET
    """Information about all previous build phases that are complete and information about any current build phase that
    is not yet complete."""

    source: Optional[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = UNSET
    secondary_sources: Optional[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="secondarySources")
    """An array of ProjectSource objects."""

    secondary_source_versions: Optional[list[ProjectSourceVersion]] = Field(
        default=UNSET, alias="secondarySourceVersions"
    )
    """An array of ProjectSourceVersion objects. Each ProjectSourceVersion must be one of: For CodeCommit: the commit
    ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds
    to the version of the source code you want to build. If a pull request ID is specified, it must use the format
    pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not
    specified, the default branch's HEAD commit ID is used. For Bitbucket: the commit ID, branch name, or tag name that
    corresponds to the version of"""

    artifacts: Optional[BuildArtifacts] = UNSET
    secondary_artifacts: Optional[list[BuildArtifacts]] = Field(default=UNSET, alias="secondaryArtifacts")
    """An array of ProjectArtifacts objects."""

    cache: Optional[ProjectCache] = UNSET
    environment: Optional[ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = UNSET
    service_role: Optional[str] = Field(default=UNSET, alias="serviceRole")
    """The name of a service role used for this build."""

    logs: Optional[LogsLocation] = UNSET
    timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="timeoutInMinutes")
    """How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this build if it does
    not get marked as completed."""

    queued_timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="queuedTimeoutInMinutes")
    """The number of minutes a build is allowed to be queued before it times out."""

    build_complete: Optional[bool] = Field(default=UNSET, alias="buildComplete")
    """Whether the build is complete. True if complete; otherwise, false."""

    initiator: Optional[str] = UNSET
    """The entity that started the build. Valid values include: If CodePipeline started the build, the pipeline's name
    (for example, codepipeline/my-demo-pipeline). If a user started the build, the user's name (for example,
    MyUserName). If the Jenkins plugin for CodeBuild started the build, the string CodeBuild-Jenkins-Plugin."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="vpcConfig")
    network_interface: Optional[NetworkInterface] = Field(default=UNSET, alias="networkInterface")
    encryption_key: Optional[str] = Field(default=UNSET, alias="encryptionKey")
    """The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts. You
    can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that
    key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the
    format alias/)."""

    exported_environment_variables: Optional[list[ExportedEnvironmentVariable]] = Field(
        default=UNSET, alias="exportedEnvironmentVariables"
    )
    """A list of exported environment variables for this build. Exported environment variables are used in conjunction
    with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline.
    For more information, see Working with variables in the CodePipeline User Guide."""

    report_arns: Optional[list[str]] = Field(default=UNSET, alias="reportArns")
    """An array of the ARNs associated with this build's reports."""

    file_system_locations: Optional[list[ProjectFileSystemLocation]] = Field(default=UNSET, alias="fileSystemLocations")
    """An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object
    specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic
    File System."""

    debug_session: Optional[DebugSession] = Field(default=UNSET, alias="debugSession")
    build_batch_arn: Optional[str] = Field(default=UNSET, alias="buildBatchArn")
    """The ARN of the batch build that this build is a member of, if applicable."""

    auto_retry_config: Optional[AutoRetryConfig] = Field(default=UNSET, alias="autoRetryConfig")


class BuildDict(TypedDict):
    id: NotRequired[str]
    arn: NotRequired[str]
    build_number: NotRequired[int]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    current_phase: NotRequired[str]
    build_status: NotRequired[BuildStatusOrStr]
    source_version: NotRequired[str]
    resolved_source_version: NotRequired[str]
    project_name: NotRequired[str]
    phases: NotRequired[list[BuildPhaseDict]]
    source: NotRequired[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    secondary_sources: NotRequired[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    ]
    secondary_source_versions: NotRequired[list[ProjectSourceVersionDict]]
    artifacts: NotRequired[BuildArtifactsDict]
    secondary_artifacts: NotRequired[list[BuildArtifactsDict]]
    cache: NotRequired[ProjectCacheDict]
    environment: NotRequired[ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    service_role: NotRequired[str]
    logs: NotRequired[LogsLocationDict]
    timeout_in_minutes: NotRequired[int]
    queued_timeout_in_minutes: NotRequired[int]
    build_complete: NotRequired[bool]
    initiator: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    network_interface: NotRequired[NetworkInterfaceDict]
    encryption_key: NotRequired[str]
    exported_environment_variables: NotRequired[list[ExportedEnvironmentVariableDict]]
    report_arns: NotRequired[list[str]]
    file_system_locations: NotRequired[list[ProjectFileSystemLocationDict]]
    debug_session: NotRequired[DebugSessionDict]
    build_batch_arn: NotRequired[str]
    auto_retry_config: NotRequired[AutoRetryConfigDict]
