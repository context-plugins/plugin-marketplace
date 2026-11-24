from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logs_config import LogsConfig, LogsConfigDict
from .project_artifacts_aws_code_build_projects_api import (
    ProjectArtifactsAwsCodeBuildProjectsApi,
    ProjectArtifactsAwsCodeBuildProjectsApiDict,
)
from .project_build_batch_config import ProjectBuildBatchConfig, ProjectBuildBatchConfigDict
from .project_cache_aws_code_build_projects_api import (
    ProjectCacheAwsCodeBuildProjectsApi,
    ProjectCacheAwsCodeBuildProjectsApiDict,
)
from .project_environment_aws_code_build_projects_api import (
    ProjectEnvironmentAwsCodeBuildProjectsApi,
    ProjectEnvironmentAwsCodeBuildProjectsApiDict,
)
from .project_file_system_location import ProjectFileSystemLocation, ProjectFileSystemLocationDict
from .project_source_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .project_source_version import ProjectSourceVersion, ProjectSourceVersionDict
from .tag_model import TagModel, TagModelDict
from .vpc_config import VpcConfig, VpcConfigDict


class CreateProjectInputAwsCodeBuildProjectsApi(SdkBaseModel):
    name: str
    """The name of the build project."""

    description: Optional[str] = UNSET
    """A description that makes the build project easy to identify."""

    source: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi
    secondary_sources: Optional[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="secondarySources")
    """An array of ProjectSource objects."""

    source_version: Optional[str] = Field(default=UNSET, alias="sourceVersion")
    """A version of the build input to be built for this project. If not specified, the latest version is used. If
    specified, it must be one of: For CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID,
    pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a
    pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is
    specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For
    GitLab: the commit ID, branch, o"""

    secondary_source_versions: Optional[list[ProjectSourceVersion]] = Field(
        default=UNSET, alias="secondarySourceVersions"
    )
    """An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they
    take precedence over these secondarySourceVersions (at the project level)."""

    artifacts: ProjectArtifactsAwsCodeBuildProjectsApi
    secondary_artifacts: Optional[list[ProjectArtifactsAwsCodeBuildProjectsApi]] = Field(
        default=UNSET, alias="secondaryArtifacts"
    )
    """An array of ProjectArtifacts objects."""

    cache: Optional[ProjectCacheAwsCodeBuildProjectsApi] = UNSET
    environment: ProjectEnvironmentAwsCodeBuildProjectsApi
    service_role: str = Field(alias="serviceRole")
    """The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf
    of the Amazon Web Services account."""

    timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="timeoutInMinutes")
    """How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any build that has not
    been marked as completed. The default is 60 minutes."""

    queued_timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="queuedTimeoutInMinutes")
    """The number of minutes a build is allowed to be queued before it times out."""

    encryption_key: Optional[str] = Field(default=UNSET, alias="encryptionKey")
    """The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts. You
    can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that
    key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the
    format alias/)."""

    tags: Optional[list[TagModel]] = UNSET
    """A list of tag key and value pairs associated with this build project. These tags are available for use by Amazon
    Web Services services that support CodeBuild build project tags."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="vpcConfig")
    badge_enabled: Optional[bool] = Field(default=UNSET, alias="badgeEnabled")
    """Set this to true to generate a publicly accessible URL for your project's build badge."""

    logs_config: Optional[LogsConfig] = Field(default=UNSET, alias="logsConfig")
    file_system_locations: Optional[list[ProjectFileSystemLocation]] = Field(default=UNSET, alias="fileSystemLocations")
    """An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object
    specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic
    File System."""

    build_batch_config: Optional[ProjectBuildBatchConfig] = Field(default=UNSET, alias="buildBatchConfig")
    concurrent_build_limit: Optional[int] = Field(default=UNSET, alias="concurrentBuildLimit")
    """The maximum number of concurrent builds that are allowed for this project. New builds are only started if the
    current number of builds is less than or equal to this limit. If the current build count meets this limit, new
    builds are throttled and are not run."""

    auto_retry_limit: Optional[int] = Field(default=UNSET, alias="autoRetryLimit")
    """The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is
    set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times."""


class CreateProjectInputAwsCodeBuildProjectsApiDict(TypedDict):
    name: str
    description: NotRequired[str]
    source: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict
    secondary_sources: NotRequired[
        list[ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    ]
    source_version: NotRequired[str]
    secondary_source_versions: NotRequired[list[ProjectSourceVersionDict]]
    artifacts: ProjectArtifactsAwsCodeBuildProjectsApiDict
    secondary_artifacts: NotRequired[list[ProjectArtifactsAwsCodeBuildProjectsApiDict]]
    cache: NotRequired[ProjectCacheAwsCodeBuildProjectsApiDict]
    environment: ProjectEnvironmentAwsCodeBuildProjectsApiDict
    service_role: str
    timeout_in_minutes: NotRequired[int]
    queued_timeout_in_minutes: NotRequired[int]
    encryption_key: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    vpc_config: NotRequired[VpcConfigDict]
    badge_enabled: NotRequired[bool]
    logs_config: NotRequired[LogsConfigDict]
    file_system_locations: NotRequired[list[ProjectFileSystemLocationDict]]
    build_batch_config: NotRequired[ProjectBuildBatchConfigDict]
    concurrent_build_limit: NotRequired[int]
    auto_retry_limit: NotRequired[int]
