from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Conversion(SdkBaseModel):
    action_type: Optional[str] = UNSET
    value: Optional[str] = UNSET


class ConversionDict(TypedDict):
    action_type: NotRequired[str]
    value: NotRequired[str]
