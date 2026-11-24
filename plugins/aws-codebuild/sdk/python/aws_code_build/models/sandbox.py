from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .logs_config import LogsConfig, LogsConfigDict
from .project_environment import ProjectEnvironment, ProjectEnvironmentDict
from .project_file_system_location import ProjectFileSystemLocation, ProjectFileSystemLocationDict
from .project_source import ProjectSource, ProjectSourceDict
from .project_source_version import ProjectSourceVersion, ProjectSourceVersionDict
from .sandbox_session import SandboxSession, SandboxSessionDict
from .vpc_config import VpcConfig, VpcConfigDict


class Sandbox(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the sandbox."""

    arn: Optional[str] = UNSET
    """The ARN of the sandbox."""

    project_name: Optional[str] = Field(default=UNSET, alias="projectName")
    """The CodeBuild project name."""

    request_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="requestTime")
    """When the sandbox process was initially requested, expressed in Unix time format."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the sandbox process started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the sandbox process ended, expressed in Unix time format."""

    status: Optional[str] = UNSET
    """The status of the sandbox."""

    source: Optional[ProjectSource] = UNSET
    source_version: Optional[str] = Field(default=UNSET, alias="sourceVersion")
    """Any version identifier for the version of the sandbox to be built."""

    secondary_sources: Optional[list[ProjectSource]] = Field(default=UNSET, alias="secondarySources")
    """An array of ProjectSource objects."""

    secondary_source_versions: Optional[list[ProjectSourceVersion]] = Field(
        default=UNSET, alias="secondarySourceVersions"
    )
    """An array of ProjectSourceVersion objects."""

    environment: Optional[ProjectEnvironment] = UNSET
    file_system_locations: Optional[list[ProjectFileSystemLocation]] = Field(default=UNSET, alias="fileSystemLocations")
    """An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object
    specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic
    File System."""

    timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="timeoutInMinutes")
    """How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this sandbox if it does
    not get marked as completed."""

    queued_timeout_in_minutes: Optional[int] = Field(default=UNSET, alias="queuedTimeoutInMinutes")
    """The number of minutes a sandbox is allowed to be queued before it times out."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="vpcConfig")
    log_config: Optional[LogsConfig] = Field(default=UNSET, alias="logConfig")
    encryption_key: Optional[str] = Field(default=UNSET, alias="encryptionKey")
    """The Key Management Service customer master key (CMK) to be used for encrypting the sandbox output artifacts."""

    service_role: Optional[str] = Field(default=UNSET, alias="serviceRole")
    """The name of a service role used for this sandbox."""

    current_session: Optional[SandboxSession] = Field(default=UNSET, alias="currentSession")


class SandboxDict(TypedDict):
    id: NotRequired[str]
    arn: NotRequired[str]
    project_name: NotRequired[str]
    request_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    status: NotRequired[str]
    source: NotRequired[ProjectSourceDict]
    source_version: NotRequired[str]
    secondary_sources: NotRequired[list[ProjectSourceDict]]
    secondary_source_versions: NotRequired[list[ProjectSourceVersionDict]]
    environment: NotRequired[ProjectEnvironmentDict]
    file_system_locations: NotRequired[list[ProjectFileSystemLocationDict]]
    timeout_in_minutes: NotRequired[int]
    queued_timeout_in_minutes: NotRequired[int]
    vpc_config: NotRequired[VpcConfigDict]
    log_config: NotRequired[LogsConfigDict]
    encryption_key: NotRequired[str]
    service_role: NotRequired[str]
    current_session: NotRequired[SandboxSessionDict]
