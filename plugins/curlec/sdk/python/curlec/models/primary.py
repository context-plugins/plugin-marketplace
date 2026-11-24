from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Primary(SdkBaseModel):
    number: Optional[str] = UNSET
    country_code: Optional[str] = UNSET


class PrimaryDict(TypedDict):
    number: NotRequired[str]
    country_code: NotRequired[str]
