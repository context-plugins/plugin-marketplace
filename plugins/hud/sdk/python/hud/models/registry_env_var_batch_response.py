from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryEnvVarBatchResponse(SdkBaseModel):
    created: int
    updated: int
    deleted: int


class RegistryEnvVarBatchResponseDict(TypedDict):
    created: int
    updated: int
    deleted: int
