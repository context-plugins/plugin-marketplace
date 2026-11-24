from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .record import Record, RecordDict


class Response(SdkBaseModel):
    records: Optional[list[Record]] = UNSET


class ResponseDict(TypedDict):
    records: NotRequired[list[RecordDict]]
