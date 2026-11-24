from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.update_credit_currency_request_status import UpdateCreditCurrencyRequestStatusOrStr


class UpdateCreditCurrencyRequest(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    """Updated description for this credit currency. Use null to clear the description."""

    status: Optional[UpdateCreditCurrencyRequestStatusOrStr] = UNSET
    """Set to ``archived`` to archive this credit currency, or ``active`` to restore it."""


class UpdateCreditCurrencyRequestDict(TypedDict):
    description: NotRequired[str | None]
    status: NotRequired[UpdateCreditCurrencyRequestStatusOrStr]
