from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .registry_env_var_batch_item import RegistryEnvVarBatchItem, RegistryEnvVarBatchItemDict


class RegistryEnvVarBatchRequest(SdkBaseModel):
    registry_id: UUID
    variables: list[RegistryEnvVarBatchItem]


class RegistryEnvVarBatchRequestDict(TypedDict):
    registry_id: UUID
    variables: list[RegistryEnvVarBatchItemDict]
