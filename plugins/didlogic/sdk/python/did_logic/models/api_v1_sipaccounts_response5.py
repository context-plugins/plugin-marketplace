from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sipaccount5 import Sipaccount5, Sipaccount5Dict
from .warning_model import WarningModel, WarningModelDict


class ApiV1SipaccountsResponse5(SdkBaseModel):
    sipaccount: Sipaccount5
    """Updated SIP account details"""

    warnings: Optional[list[WarningModel]] = UNSET
    """Non-fatal notices for parts of the request that were accepted but silently skipped (e.g. an unverified caller
    ID). Present only when non-empty."""


class ApiV1SipaccountsResponse5Dict(TypedDict):
    sipaccount: Sipaccount5Dict
    warnings: NotRequired[list[WarningModelDict]]
