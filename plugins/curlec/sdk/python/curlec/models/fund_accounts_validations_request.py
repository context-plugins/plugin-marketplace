from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.account_type import AccountTypeOrStr
from .enums.validation_type import ValidationTypeOrStr


class FundAccountsValidationsRequest(SdkBaseModel):
    account_type: AccountTypeOrStr
    fund_account: Any
    """For composite validation, include contact object instead of contact_id"""

    amount: Optional[int] = UNSET
    """Penny drop amount in paise (typically 100)"""

    currency: str = "INR"
    notes: Optional[Any] = UNSET
    receipt: Optional[str] = UNSET
    validation_type: Optional[ValidationTypeOrStr] = UNSET
    """penniless = reverse penny drop (UPI intent); optimized = system chooses best method"""


class FundAccountsValidationsRequestDict(TypedDict):
    account_type: AccountTypeOrStr
    fund_account: Any
    amount: NotRequired[int]
    currency: NotRequired[str]
    notes: NotRequired[Any]
    receipt: NotRequired[str]
    validation_type: NotRequired[ValidationTypeOrStr]
