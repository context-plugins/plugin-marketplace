from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomersExternalPaymentMethodsRequest(SdkBaseModel):
    confirmation_token: str = Field(alias="confirmationToken")
    """Stripe confirmation token for the payment method"""

    return_url: str = Field(alias="returnUrl")
    """URL to redirect to after payment method setup"""

    metadata: Optional[dict[str, Any]] = UNSET
    """Optional metadata to attach to the payment method"""


class CustomersExternalPaymentMethodsRequestDict(TypedDict):
    confirmation_token: str
    return_url: str
    metadata: NotRequired[dict[str, Any]]
