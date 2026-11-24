from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryEnvVarCreateRequest(SdkBaseModel):
    registry_id: UUID
    name: str
    """Environment variable name. Lowercase letters are uppercased and hyphens become underscores; all other characters
    are rejected."""

    value: str


class RegistryEnvVarCreateRequestDict(TypedDict):
    registry_id: UUID
    name: str
    value: str
