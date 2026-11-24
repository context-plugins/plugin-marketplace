from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .registry_env_var_check_item import RegistryEnvVarCheckItem, RegistryEnvVarCheckItemDict


class RegistryEnvVarCheckResponse(SdkBaseModel):
    environments: list[RegistryEnvVarCheckItem]


class RegistryEnvVarCheckResponseDict(TypedDict):
    environments: list[RegistryEnvVarCheckItemDict]
