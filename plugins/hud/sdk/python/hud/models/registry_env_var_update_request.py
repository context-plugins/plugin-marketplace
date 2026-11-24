from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RegistryEnvVarUpdateRequest(SdkBaseModel):
    value: Optional[str] = UNSET


class RegistryEnvVarUpdateRequestDict(TypedDict):
    value: NotRequired[str]
