from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Settlements(SdkBaseModel):
    account_number: Optional[str] = UNSET
    """Bank account number for settlements."""

    ifsc_code: Optional[str] = UNSET
    """IFSC code of the settlement bank."""

    beneficiary_name: Optional[str] = UNSET
    """Account holder name."""


class SettlementsDict(TypedDict):
    account_number: NotRequired[str]
    ifsc_code: NotRequired[str]
    beneficiary_name: NotRequired[str]
