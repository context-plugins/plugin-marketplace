from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryEnvVarCheckRequest(SdkBaseModel):
    registry_ids: list[UUID]


class RegistryEnvVarCheckRequestDict(TypedDict):
    registry_ids: list[UUID]
