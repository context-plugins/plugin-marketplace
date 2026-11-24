from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .build_artifacts import BuildArtifacts, BuildArtifactsDict
from .build_batch_phase import BuildBatchPhase, BuildBatchPhaseDict
from .build_group import BuildGroup, BuildGroupDict
from .enums.build_batch_status import BuildBatchStatusOrStr
from .logs_config import LogsConfig, LogsConfigDict
from .project_build_batch_config import ProjectBuildBatchConfig, ProjectBuildBatchConfigDict
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


class BuildBatch(SdkBaseModel):
    id: Optional[str] = UNSET
    """The identifier of the batch build."""

    arn: Optional[str] = UNSET
    """The ARN of the batch build."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """The date and time that the batch build started."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """The date and time that the batch build ended."""

    current_phase: Optional[str] = Field(default=UNSET, alias="currentPhase")
    """The current phase of the batch build."""

    build_batch_status: Optional[BuildBatchStatusOrStr] = Field(default=UNSET, alias="buildBatchStatus")
    """The status of the batch build."""

    source_version: Optional[str] = Field(default=UNSET, alias="sourceVersion")
    """The identifier of the version of the source code to be built."""

    resolved_source_version: Optional[str] = Field(default=UNSET, alias="resolvedSourceVersion")
    """The identifier of the resolved version of this batch build's source code. For CodeCommit, GitHub, GitHub
    Enterprise, and BitBucket, the commit ID. For CodePipeline, the source revision provided by CodePipeline. For Amazon
    S3, this does not apply."""

    project_name: Optional[str] = Field(default=UNSET, alias="projectName")
    """The name of the batch build project."""

    phases: Optional[list[BuildBatchPhase]] = UNSET
    """An array of BuildBatchPhase objects the specify the phases of the batch build."""

    source: Optional[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = UNSET
    secondary_sources: Optional[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="secondarySources")
    """An array of ProjectSource objects that define the sources for the batch build."""

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
    """An array of BuildArtifacts objects the define the build artifacts for this batch build."""

    cache: Optional[ProjectCache] = UNSET
    environment: Optional[ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = UNSET
    service_role: Optional[str] = Field(default=UNSET, alias="serviceRole")
    """The name of a service role used for builds in the batch."""

    log_config: Optional[LogsConfig] = Field(default=UNSET, alias="logConfig")
    build_timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="buildTimeoutInMinutes")
    """Specifies the maximum amount of time, in minutes, that the build in a batch must be completed in."""

    queued_timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="queuedTimeoutInMinutes")
    """Specifies the amount of time, in minutes, that the batch build is allowed to be queued before it times out."""

    complete: Optional[bool] = UNSET
    """Indicates if the batch build is complete."""

    initiator: Optional[str] = UNSET
    """The entity that started the batch build. Valid values include: If CodePipeline started the build, the pipeline's
    name (for example, codepipeline/my-demo-pipeline). If a user started the build, the user's name. If the Jenkins
    plugin for CodeBuild started the build, the string CodeBuild-Jenkins-Plugin."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="vpcConfig")
    encryption_key: Optional[str] = Field(default=UNSET, alias="encryptionKey")
    """The Key Management Service customer master key (CMK) to be used for encrypting the batch build output artifacts.
    You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to
    that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
    the format alias/)."""

    build_batch_number: Optional[int] = Field(default=UNSET, alias="buildBatchNumber")
    """The number of the batch build. For each project, the buildBatchNumber of its first batch build is 1. The
    buildBatchNumber of each subsequent batch build is incremented by 1. If a batch build is deleted, the
    buildBatchNumber of other batch builds does not change."""

    file_system_locations: Optional[list[ProjectFileSystemLocation]] = Field(default=UNSET, alias="fileSystemLocations")
    """An array of ProjectFileSystemLocation objects for the batch build project. A ProjectFileSystemLocation object
    specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic
    File System."""

    build_batch_config: Optional[ProjectBuildBatchConfig] = Field(default=UNSET, alias="buildBatchConfig")
    build_groups: Optional[list[BuildGroup]] = Field(default=UNSET, alias="buildGroups")
    """An array of BuildGroup objects that define the build groups for the batch build."""

    debug_session_enabled: Optional[bool] = Field(default=UNSET, alias="debugSessionEnabled")
    """Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build
    in Session Manager. Batch session debugging is not supported for matrix batch builds."""

    report_arns: Optional[list[str]] = Field(default=UNSET, alias="reportArns")
    """An array that contains the ARNs of reports created by merging reports from builds associated with this batch
    build."""


class BuildBatchDict(TypedDict):
    id: NotRequired[str]
    arn: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    current_phase: NotRequired[str]
    build_batch_status: NotRequired[BuildBatchStatusOrStr]
    source_version: NotRequired[str]
    resolved_source_version: NotRequired[str]
    project_name: NotRequired[str]
    phases: NotRequired[list[BuildBatchPhaseDict]]
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
    log_config: NotRequired[LogsConfigDict]
    build_timeout_in_minutes: NotRequired[int]
    queued_timeout_in_minutes: NotRequired[int]
    complete: NotRequired[bool]
    initiator: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    encryption_key: NotRequired[str]
    build_batch_number: NotRequired[int]
    file_system_locations: NotRequired[list[ProjectFileSystemLocationDict]]
    build_batch_config: NotRequired[ProjectBuildBatchConfigDict]
    build_groups: NotRequired[list[BuildGroupDict]]
    debug_session_enabled: NotRequired[bool]
    report_arns: NotRequired[list[str]]
