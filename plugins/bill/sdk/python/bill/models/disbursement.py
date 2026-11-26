from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .disbursement_account import DisbursementAccount, DisbursementAccountDict


class Disbursement(SdkBaseModel):
    """Payment disbursement information."""

    amount: Optional[float] = UNSET
    currency: Optional[str] = UNSET
    arrives_by_date: Optional[str] = Field(default=UNSET, alias="arrivesByDate")
    disbursement_account: Optional[DisbursementAccount] = Field(default=UNSET, alias="disbursementAccount")
    """Disbursement account details."""


class DisbursementDict(TypedDict):
    amount: NotRequired[float]
    currency: NotRequired[str]
    arrives_by_date: NotRequired[str]
    disbursement_account: NotRequired[DisbursementAccountDict]
