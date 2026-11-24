from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryCredential(SdkBaseModel):
    credential: str
    """The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. The credential can use the
    name of the credentials only if they exist in your current Amazon Web Services Region."""

    credential_provider: Literal["SECRETS_MANAGER"] = Field(default="SECRETS_MANAGER", alias="credentialProvider")
    """The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER,
    is for Secrets Manager."""


class RegistryCredentialDict(TypedDict):
    credential: str
    credential_provider: Literal["SECRETS_MANAGER"]
