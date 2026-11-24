from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OAuthCredential(SdkBaseModel):
    """Represents an OAuth token of the account that authorized the Connection, and associated metadata."""

    oauth_token_secret_version: Optional[str] = Field(default=UNSET, alias="oauthTokenSecretVersion")
    """Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format:
    ``projects/*/secrets/*/versions/*``."""

    username: Optional[str] = UNSET
    """Output only. The username associated to this token."""


class OAuthCredentialDict(TypedDict):
    oauth_token_secret_version: NotRequired[str]
    username: NotRequired[str]
