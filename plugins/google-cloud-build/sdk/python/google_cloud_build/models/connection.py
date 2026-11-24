from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bitbucket_cloud_config import BitbucketCloudConfig, BitbucketCloudConfigDict
from .bitbucket_data_center_config import BitbucketDataCenterConfig, BitbucketDataCenterConfigDict
from .git_hub_config import GitHubConfig, GitHubConfigDict
from .google_devtools_cloudbuild_v2_git_hub_enterprise_config import (
    GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig,
    GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigDict,
)
from .google_devtools_cloudbuild_v2_git_lab_config import (
    GoogleDevtoolsCloudbuildV2GitLabConfig,
    GoogleDevtoolsCloudbuildV2GitLabConfigDict,
)
from .installation_state1 import InstallationState1, InstallationState1Dict


class Connection(SdkBaseModel):
    """A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center, Bitbucket Cloud or GitLab."""

    installation_state: Optional[InstallationState1] = Field(default=UNSET, alias="installationState")
    """Output only. Installation state of the Connection."""

    gitlab_config: Optional[GoogleDevtoolsCloudbuildV2GitLabConfig] = Field(default=UNSET, alias="gitlabConfig")
    """Configuration for connections to gitlab.com or an instance of GitLab Enterprise."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Server assigned timestamp for when the connection was updated."""

    disabled: Optional[bool] = UNSET
    """Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods
    and webhooks processing for repositories in this connection will be disabled."""

    github_config: Optional[GitHubConfig] = Field(default=UNSET, alias="githubConfig")
    """Configuration for connections to github.com."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Server assigned timestamp for when the connection was created."""

    bitbucket_cloud_config: Optional[BitbucketCloudConfig] = Field(default=UNSET, alias="bitbucketCloudConfig")
    """Configuration for connections to Bitbucket Cloud."""

    bitbucket_data_center_config: Optional[BitbucketDataCenterConfig] = Field(
        default=UNSET, alias="bitbucketDataCenterConfig"
    )
    """Configuration for connections to Bitbucket Data Center."""

    etag: Optional[str] = UNSET
    """This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
    requests to ensure the client has an up-to-date value before proceeding."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. Allows clients to store small amounts of arbitrary data."""

    github_enterprise_config: Optional[GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig] = Field(
        default=UNSET, alias="githubEnterpriseConfig"
    )
    """Configuration for connections to an instance of GitHub Enterprise."""

    name: Optional[str] = UNSET
    """Immutable. The resource name of the connection, in the format
    ``projects/{project}/locations/{location}/connections/{connection_id}``."""

    reconciling: Optional[bool] = UNSET
    """Output only. Set to true when the connection is being set up or updated in the background."""


class ConnectionDict(TypedDict):
    installation_state: NotRequired[InstallationState1Dict]
    gitlab_config: NotRequired[GoogleDevtoolsCloudbuildV2GitLabConfigDict]
    update_time: NotRequired[str]
    disabled: NotRequired[bool]
    github_config: NotRequired[GitHubConfigDict]
    create_time: NotRequired[str]
    bitbucket_cloud_config: NotRequired[BitbucketCloudConfigDict]
    bitbucket_data_center_config: NotRequired[BitbucketDataCenterConfigDict]
    etag: NotRequired[str]
    annotations: NotRequired[dict[str, str]]
    github_enterprise_config: NotRequired[GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigDict]
    name: NotRequired[str]
    reconciling: NotRequired[bool]
