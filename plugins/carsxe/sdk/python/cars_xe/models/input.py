from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Input(SdkBaseModel):
    plate: Optional[str] = UNSET
    state: Optional[str] = UNSET


class InputDict(TypedDict):
    plate: NotRequired[str]
    state: NotRequired[str]
