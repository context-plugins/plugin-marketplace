from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentProcessor(str, Enum):
    """The payment processor via which the sale was made."""

    STRIPE = "stripe"
    SHOPIFY = "shopify"
    POLAR = "polar"
    PADDLE = "paddle"
    REVENUECAT = "revenuecat"
    CUSTOM = "custom"
    MANUAL = "manual"

    __str__ = str.__str__


PaymentProcessorOrStr: TypeAlias = Annotated[PaymentProcessor | str, open_enum_validator(PaymentProcessor)]
