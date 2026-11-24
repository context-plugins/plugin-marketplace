from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .checkout_response_payment import CheckoutResponsePayment, CheckoutResponsePaymentDict
from .configuration import Configuration, ConfigurationDict
from .enums.status import StatusOrStr
from .merchant_urls2 import MerchantUrls2, MerchantUrls2Dict


class CheckoutSession(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique identifier for the checkout Session, assigned by Tabby."""

    configuration: Optional[Configuration] = UNSET
    """Some details associated with the current session."""

    token: OptionalNullable[str] = UNSET
    """In the response, this field will be filled with ``token`` value if session status is 'approved'. You can use that
    token for Tokenized Payments and Web Checkout."""

    payment: Optional[CheckoutResponsePayment] = UNSET
    """Payment object associated with the current session."""

    status: Optional[StatusOrStr] = UNSET
    """Status of the current session. Used at the pre-scoring and session creation steps.
      - ``created`` is returned when the request is approved and the customer is eligible to use Tabby
      - ``rejected`` means that there are no available products for a customer
      - ``expired`` and ``approved`` - used for specific type of integration, kindly ignore them if not communicated
            directly"""

    merchant_urls: Optional[MerchantUrls2] = UNSET


class CheckoutSessionDict(TypedDict):
    id: NotRequired[UUID]
    configuration: NotRequired[ConfigurationDict]
    token: NotRequired[str | None]
    payment: NotRequired[CheckoutResponsePaymentDict]
    status: NotRequired[StatusOrStr]
    merchant_urls: NotRequired[MerchantUrls2Dict]
