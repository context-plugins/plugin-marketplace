from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankAccountDefaults(SdkBaseModel):
    """Bank payment default values for BILL AP and AR operations."""

    payables: Optional[bool] = UNSET
    receivables: Optional[bool] = UNSET


class BankAccountDefaultsDict(TypedDict):
    payables: NotRequired[bool]
    receivables: NotRequired[bool]
