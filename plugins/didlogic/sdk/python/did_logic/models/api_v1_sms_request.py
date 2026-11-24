from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dlr import Dlr, DlrDict
from .sm1 import Sm1, Sm1Dict


class ApiV1SmsRequest(SdkBaseModel):
    sm: Sm1
    dlr: Optional[Dlr] = UNSET


class ApiV1SmsRequestDict(TypedDict):
    sm: Sm1Dict
    dlr: NotRequired[DlrDict]
