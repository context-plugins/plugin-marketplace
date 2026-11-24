from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dids5 import Dids5, Dids5Dict
from .warning_model import WarningModel, WarningModelDict


class ApiV2NumbersPurchaseResponse3(SdkBaseModel):
    dids: list[Dids5]
    """List of cancelled DIDs returned to inventory"""

    warnings: Optional[list[WarningModel]] = UNSET
    """Non-fatal notices for requested numbers that were not cancelled — not in your cancelable inventory
    (``not_in_inventory``), kept because the balance does not cover the early-return fee (``insufficient_funds``), or
    cancelable but not cancelled (``cancellation_failed``). Present only when non-empty."""


class ApiV2NumbersPurchaseResponse3Dict(TypedDict):
    dids: list[Dids5Dict]
    warnings: NotRequired[list[WarningModelDict]]
