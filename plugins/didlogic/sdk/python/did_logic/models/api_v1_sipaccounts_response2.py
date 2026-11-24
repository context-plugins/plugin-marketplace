from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sipaccount2 import Sipaccount2, Sipaccount2Dict
from .warning_model import WarningModel, WarningModelDict


class ApiV1SipaccountsResponse2(SdkBaseModel):
    sipaccount: Sipaccount2
    """Created SIP account details"""

    warnings: Optional[list[WarningModel]] = UNSET
    """Non-fatal notices for parts of the request that were accepted but silently skipped (e.g. an unverified caller
    ID). Present only when non-empty."""


class ApiV1SipaccountsResponse2Dict(TypedDict):
    sipaccount: Sipaccount2Dict
    warnings: NotRequired[list[WarningModelDict]]
