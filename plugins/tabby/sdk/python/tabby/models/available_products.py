from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .checkout_configuration_product import CheckoutConfigurationProduct, CheckoutConfigurationProductDict


class AvailableProducts(SdkBaseModel):
    installments: OptionalNullable[list[CheckoutConfigurationProduct]] = UNSET
    """Links to redirect customers to Tabby Checkout."""


class AvailableProductsDict(TypedDict):
    installments: NotRequired[list[CheckoutConfigurationProductDict] | None]
