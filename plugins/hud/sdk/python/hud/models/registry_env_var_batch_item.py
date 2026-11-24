from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RegistryEnvVarBatchItem(SdkBaseModel):
    name: str
    """Environment variable name. Lowercase letters are uppercased and hyphens become underscores; all other characters
    are rejected."""

    value: str


class RegistryEnvVarBatchItemDict(TypedDict):
    name: str
    value: str
