from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Company1LushaSignalsApi(SdkBaseModel):
    id: str
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET


class Company1LushaSignalsApiDict(TypedDict):
    id: str
    name: NotRequired[str]
    domain: NotRequired[str]
