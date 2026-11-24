from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryEnvVarCheckItem(SdkBaseModel):
    registry_id: UUID
    required_vars: list[str]
    configured_vars: list[str]
    missing_vars: list[str]
    is_complete: bool


class RegistryEnvVarCheckItemDict(TypedDict):
    registry_id: UUID
    required_vars: list[str]
    configured_vars: list[str]
    missing_vars: list[str]
    is_complete: bool
