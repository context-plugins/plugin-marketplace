from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OrdersActivateAndPayRequest(SdkBaseModel):
    confirmation_token: str = Field(alias="confirmationToken")
    """Stripe confirmation token for the payment method"""

    return_url: str = Field(alias="returnUrl")
    """URL to redirect to after payment processing"""


class OrdersActivateAndPayRequestDict(TypedDict):
    confirmation_token: str
    return_url: str
