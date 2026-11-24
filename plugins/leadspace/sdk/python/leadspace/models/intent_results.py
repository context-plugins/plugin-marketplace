from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr
from .intent_data import IntentData, IntentDataDict


class IntentResults(SdkBaseModel):
    status: Optional[Status1OrStr] = UNSET
    external_id: Optional[str] = UNSET
    data: Optional[IntentData] = UNSET


class IntentResultsDict(TypedDict):
    status: NotRequired[Status1OrStr]
    external_id: NotRequired[str]
    data: NotRequired[IntentDataDict]
