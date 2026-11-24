from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Input(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    required: Optional[bool] = UNSET


class InputDict(TypedDict):
    name: str
    description: NotRequired[str]
    required: NotRequired[bool]
