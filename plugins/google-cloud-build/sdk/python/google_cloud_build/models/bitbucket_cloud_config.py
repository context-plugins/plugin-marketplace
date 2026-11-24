from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user_credential5 import UserCredential5, UserCredential5Dict
from .user_credential6 import UserCredential6, UserCredential6Dict


class BitbucketCloudConfig(SdkBaseModel):
    """Configuration for connections to Bitbucket Cloud."""

    authorizer_credential: Optional[UserCredential5] = Field(default=UNSET, alias="authorizerCredential")
    """Required. An access token with the ``webhook``, ``repository``, ``repository:admin`` and ``pullrequest`` scope
    access. It can be either a workspace, project or repository access token. It's recommended to use a system account
    to generate these credentials."""

    read_authorizer_credential: Optional[UserCredential6] = Field(default=UNSET, alias="readAuthorizerCredential")
    """Required. An access token with the ``repository`` access. It can be either a workspace, project or repository
    access token. It's recommended to use a system account to generate the credentials."""

    workspace: Optional[str] = UNSET
    """Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform."""

    webhook_secret_secret_version: Optional[str] = Field(default=UNSET, alias="webhookSecretSecretVersion")
    """Required. SecretManager resource containing the webhook secret used to verify webhook events, formatted as
    ``projects/*/secrets/*/versions/*``."""


class BitbucketCloudConfigDict(TypedDict):
    authorizer_credential: NotRequired[UserCredential5Dict]
    read_authorizer_credential: NotRequired[UserCredential6Dict]
    workspace: NotRequired[str]
    webhook_secret_secret_version: NotRequired[str]
