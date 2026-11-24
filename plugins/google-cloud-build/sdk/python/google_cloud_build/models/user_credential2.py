from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserCredential2(SdkBaseModel):
    """Required. A http access token with the ``REPO_READ`` access."""

    username: Optional[str] = UNSET
    """Output only. The username associated to this token."""

    user_token_secret_version: Optional[str] = Field(default=UNSET, alias="userTokenSecretVersion")
    """Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format:
    ``projects/*/secrets/*/versions/*``."""


class UserCredential2Dict(TypedDict):
    username: NotRequired[str]
    user_token_secret_version: NotRequired[str]
