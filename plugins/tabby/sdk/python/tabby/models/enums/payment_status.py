from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentStatus(str, Enum):
    """Status of the current payment:
    - ``CREATED`` means that the payment is created successfully, but not finished yet;
    - ``AUTHORIZED`` and ``CLOSED`` mark the successfully approved and captured payments accordingly;
    - ``REJECTED`` is returned when a customer is rejected during Tabby Checkout;
    - ``EXPIRED`` is used when a customer cancels a payment or when Tabby doesn't receive a successfully paid
        transaction after timeout."""

    CREATED = "CREATED"
    AUTHORIZED = "AUTHORIZED"
    CLOSED = "CLOSED"
    REJECTED = "REJECTED"
    EXPIRED = "EXPIRED"

    __str__ = str.__str__


PaymentStatusOrStr: TypeAlias = Annotated[PaymentStatus | str, open_enum_validator(PaymentStatus)]
