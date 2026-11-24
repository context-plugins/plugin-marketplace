from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardAccountDefaults(SdkBaseModel):
    """Card payment default values for BILL operations."""

    payables: Optional[bool] = UNSET
    receivables: Optional[bool] = UNSET
    funding: Optional[bool] = UNSET
    disbursement: Optional[bool] = UNSET


class CardAccountDefaultsDict(TypedDict):
    payables: NotRequired[bool]
    receivables: NotRequired[bool]
    funding: NotRequired[bool]
    disbursement: NotRequired[bool]
