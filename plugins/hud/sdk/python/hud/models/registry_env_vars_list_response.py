from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .registry_env_var_item import RegistryEnvVarItem, RegistryEnvVarItemDict


class RegistryEnvVarsListResponse(SdkBaseModel):
    variables: list[RegistryEnvVarItem]


class RegistryEnvVarsListResponseDict(TypedDict):
    variables: list[RegistryEnvVarItemDict]
