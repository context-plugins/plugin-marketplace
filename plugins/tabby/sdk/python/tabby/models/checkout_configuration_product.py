from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CheckoutConfigurationProduct(SdkBaseModel):
    web_url: OptionalNullable[str] = UNSET
    """UAE/Kuwait: checkout.tabby.ai, KSA: checkout.tabby.sa"""

    qr_code: OptionalNullable[str] = UNSET
    """UAE/Kuwait: api.tabby.ai, KSA: api.tabby.sa"""


class CheckoutConfigurationProductDict(TypedDict):
    web_url: NotRequired[str | None]
    qr_code: NotRequired[str | None]
