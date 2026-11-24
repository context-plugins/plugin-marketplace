from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout_creation import CheckoutCreation, CheckoutCreationDict
from .enums.language_code import LanguageCodeOrStr
from .merchant_urls import MerchantUrls, MerchantUrlsDict


class ApiV2CheckoutRequest(SdkBaseModel):
    payment: CheckoutCreation
    """Payment object associated with the current session."""

    lang: LanguageCodeOrStr
    """Session language, used to launch HPP with desired language."""

    merchant_code: str
    """Please contact your integration manager to get the merchant code."""

    merchant_urls: Optional[MerchantUrls] = UNSET
    """Used for redirecting the customer after Tabby Checkout flow. Required for Web integration, optional for Mobile
    App integration."""

    token: Optional[str] = UNSET
    """If you already have ``token``, you can pass it there. Authorization header still requires Secret Key."""


class ApiV2CheckoutRequestDict(TypedDict):
    payment: CheckoutCreationDict
    lang: LanguageCodeOrStr
    merchant_code: str
    merchant_urls: NotRequired[MerchantUrlsDict]
    token: NotRequired[str]
