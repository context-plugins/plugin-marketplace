from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tax_history_event import TaxHistoryEvent, TaxHistoryEventDict


class TaxHistoryOk(SdkBaseModel):
    data: Optional[list[TaxHistoryEvent]] = UNSET
    request_id: Optional[str] = UNSET


class TaxHistoryOkDict(TypedDict):
    data: NotRequired[list[TaxHistoryEventDict]]
    request_id: NotRequired[str]
