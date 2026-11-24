from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Secondary(SdkBaseModel):
    number: Optional[str] = UNSET
    country_code: Optional[str] = UNSET


class SecondaryDict(TypedDict):
    number: NotRequired[str]
    country_code: NotRequired[str]
