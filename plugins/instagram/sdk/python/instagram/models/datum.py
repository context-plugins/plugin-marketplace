from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum(SdkBaseModel):
    id: Optional[str] = UNSET


class DatumDict(TypedDict):
    id: NotRequired[str]
