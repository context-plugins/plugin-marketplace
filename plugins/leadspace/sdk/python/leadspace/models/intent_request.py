from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum import Datum, DatumDict


class IntentRequest(SdkBaseModel):
    data: list[Datum]
    external_bulk_id: Optional[str] = UNSET


class IntentRequestDict(TypedDict):
    data: list[DatumDict]
    external_bulk_id: NotRequired[str]
