from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_x_account_validation_api import EntityRazorpayXAccountValidationApiOrStr
from .enums.status_razorpay_x_account_validation_api import StatusRazorpayXAccountValidationApiOrStr
from .fund_account import FundAccount, FundAccountDict
from .upi_intent import UpiIntent, UpiIntentDict
from .validation_results import ValidationResults, ValidationResultsDict


class FundAccountValidation(SdkBaseModel):
    """Bank/VPA account validation result. Live-mode only, RazorpayX Lite only."""

    id: Optional[str] = UNSET
    """Validation ID (fav_*)"""

    entity: Optional[EntityRazorpayXAccountValidationApiOrStr] = UNSET
    status: Optional[StatusRazorpayXAccountValidationApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Penny drop amount in paise"""

    currency: Optional[str] = UNSET
    utr: Optional[str] = UNSET
    reference_id: Optional[str] = UNSET
    notes: Optional[Any] = UNSET
    validated_account_type: Optional[str] = UNSET
    fund_account: Optional[FundAccount] = UNSET
    validation_results: Optional[ValidationResults] = UNSET
    status_details: Optional[Any] = UNSET
    upi_intent: Optional[UpiIntent] = UNSET
    """Present only for reverse penny drop (UPI intent flow)"""

    created_at: Optional[int] = UNSET


class FundAccountValidationDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayXAccountValidationApiOrStr]
    status: NotRequired[StatusRazorpayXAccountValidationApiOrStr]
    amount: NotRequired[int]
    currency: NotRequired[str]
    utr: NotRequired[str]
    reference_id: NotRequired[str]
    notes: NotRequired[Any]
    validated_account_type: NotRequired[str]
    fund_account: NotRequired[FundAccountDict]
    validation_results: NotRequired[ValidationResultsDict]
    status_details: NotRequired[Any]
    upi_intent: NotRequired[UpiIntentDict]
    created_at: NotRequired[int]
