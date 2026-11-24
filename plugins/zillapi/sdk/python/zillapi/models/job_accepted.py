from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict


class JobAccepted(SdkBaseModel):
    data: Optional[Data1] = UNSET
    request_id: Optional[str] = UNSET


class JobAcceptedDict(TypedDict):
    data: NotRequired[Data1Dict]
    request_id: NotRequired[str]
