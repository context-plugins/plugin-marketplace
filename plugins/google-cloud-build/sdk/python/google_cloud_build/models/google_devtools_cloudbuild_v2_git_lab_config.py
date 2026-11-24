from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_devtools_cloudbuild_v2_service_directory_config1 import (
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1,
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1Dict,
)
from .user_credential3 import UserCredential3, UserCredential3Dict
from .user_credential4 import UserCredential4, UserCredential4Dict


class GoogleDevtoolsCloudbuildV2GitLabConfig(SdkBaseModel):
    """Configuration for connections to gitlab.com or an instance of GitLab Enterprise."""

    ssl_ca: Optional[str] = Field(default=UNSET, alias="sslCa")
    """Optional. SSL certificate to use for requests to GitLab Enterprise."""

    webhook_secret_secret_version: Optional[str] = Field(default=UNSET, alias="webhookSecretSecretVersion")
    """Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project,
    formatted as ``projects/*/secrets/*/versions/*``."""

    authorizer_credential: Optional[UserCredential3] = Field(default=UNSET, alias="authorizerCredential")
    """Required. A GitLab personal access token with the ``api`` scope access."""

    server_version: Optional[str] = Field(default=UNSET, alias="serverVersion")
    """Output only. Version of the GitLab Enterprise server running on the ``host_uri``."""

    service_directory_config: Optional[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1] = Field(
        default=UNSET, alias="serviceDirectoryConfig"
    )
    """Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This
    should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If
    this field is left empty, calls to the GitLab Enterprise server will be made over the public internet."""

    read_authorizer_credential: Optional[UserCredential4] = Field(default=UNSET, alias="readAuthorizerCredential")
    """Required. A GitLab personal access token with the minimum ``read_api`` scope access."""

    host_uri: Optional[str] = Field(default=UNSET, alias="hostUri")
    """Optional. The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is
    https://gitlab.com."""


class GoogleDevtoolsCloudbuildV2GitLabConfigDict(TypedDict):
    ssl_ca: NotRequired[str]
    webhook_secret_secret_version: NotRequired[str]
    authorizer_credential: NotRequired[UserCredential3Dict]
    server_version: NotRequired[str]
    service_directory_config: NotRequired[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1Dict]
    read_authorizer_credential: NotRequired[UserCredential4Dict]
    host_uri: NotRequired[str]
