from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_devtools_cloudbuild_v2_service_directory_config4 import (
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4,
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4Dict,
)
from .user_credential1 import UserCredential1, UserCredential1Dict
from .user_credential2 import UserCredential2, UserCredential2Dict


class BitbucketDataCenterConfig(SdkBaseModel):
    """Configuration for connections to Bitbucket Data Center."""

    webhook_secret_secret_version: Optional[str] = Field(default=UNSET, alias="webhookSecretSecretVersion")
    """Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events,
    formatted as ``projects/*/secrets/*/versions/*``."""

    server_version: Optional[str] = Field(default=UNSET, alias="serverVersion")
    """Output only. Version of the Bitbucket Data Center running on the ``host_uri``."""

    service_directory_config: Optional[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4] = Field(
        default=UNSET, alias="serviceDirectoryConfig"
    )
    """Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should
    only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field
    is left empty, calls to the Bitbucket Data Center will be made over the public internet."""

    host_uri: Optional[str] = Field(default=UNSET, alias="hostUri")
    """Required. The URI of the Bitbucket Data Center instance or cluster this connection is for."""

    ssl_ca: Optional[str] = Field(default=UNSET, alias="sslCa")
    """Optional. SSL certificate to use for requests to the Bitbucket Data Center."""

    authorizer_credential: Optional[UserCredential1] = Field(default=UNSET, alias="authorizerCredential")
    """Required. A http access token with the ``REPO_ADMIN`` scope access."""

    read_authorizer_credential: Optional[UserCredential2] = Field(default=UNSET, alias="readAuthorizerCredential")
    """Required. A http access token with the ``REPO_READ`` access."""


class BitbucketDataCenterConfigDict(TypedDict):
    webhook_secret_secret_version: NotRequired[str]
    server_version: NotRequired[str]
    service_directory_config: NotRequired[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4Dict]
    host_uri: NotRequired[str]
    ssl_ca: NotRequired[str]
    authorizer_credential: NotRequired[UserCredential1Dict]
    read_authorizer_credential: NotRequired[UserCredential2Dict]
