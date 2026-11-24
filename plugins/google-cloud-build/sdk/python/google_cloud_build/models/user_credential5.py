from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserCredential5(SdkBaseModel):
    """Required. An access token with the ``webhook``, ``repository``, ``repository:admin`` and ``pullrequest`` scope
    access. It can be either a workspace, project or repository access token. It's recommended to use a system account
    to generate these credentials."""

    username: Optional[str] = UNSET
    """Output only. The username associated to this token."""

    user_token_secret_version: Optional[str] = Field(default=UNSET, alias="userTokenSecretVersion")
    """Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format:
    ``projects/*/secrets/*/versions/*``."""


class UserCredential5Dict(TypedDict):
    username: NotRequired[str]
    user_token_secret_version: NotRequired[str]
