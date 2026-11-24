from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentMethodCard(SdkBaseModel):
    """Card details (present when type is 'card')"""

    brand: Optional[str] = UNSET
    """Card brand (visa, mastercard, amex, etc.)"""

    last4: Optional[str] = UNSET
    """Last 4 digits of the card number"""

    exp_month: Optional[int] = Field(default=UNSET, alias="expMonth")
    """Expiration month (1-12)"""

    exp_year: Optional[int] = Field(default=UNSET, alias="expYear")
    """Expiration year"""


class PaymentMethodCardDict(TypedDict):
    brand: NotRequired[str]
    last4: NotRequired[str]
    exp_month: NotRequired[int]
    exp_year: NotRequired[int]
