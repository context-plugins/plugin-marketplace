from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OAuthCredential1(SdkBaseModel):
    """Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a
    robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App."""

    oauth_token_secret_version: Optional[str] = Field(default=UNSET, alias="oauthTokenSecretVersion")
    """Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format:
    ``projects/*/secrets/*/versions/*``."""

    username: Optional[str] = UNSET
    """Output only. The username associated to this token."""


class OAuthCredential1Dict(TypedDict):
    oauth_token_secret_version: NotRequired[str]
    username: NotRequired[str]
