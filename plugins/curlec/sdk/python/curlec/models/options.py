from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout import Checkout, CheckoutDict
from .hosted_page import HostedPage, HostedPageDict
from .order_razorpay_payment_links_api import OrderRazorpayPaymentLinksApi, OrderRazorpayPaymentLinksApiDict


class Options(SdkBaseModel):
    """Checkout and payment page customization."""

    checkout: Optional[Checkout] = UNSET
    hosted_page: Optional[HostedPage] = UNSET
    """Customise labels on the payment details section of the hosted page."""

    order: Optional[OrderRazorpayPaymentLinksApi] = UNSET
    """Order-level options including offers and transfers."""


class OptionsDict(TypedDict):
    checkout: NotRequired[CheckoutDict]
    hosted_page: NotRequired[HostedPageDict]
    order: NotRequired[OrderRazorpayPaymentLinksApiDict]
