from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StripeConnection(SdkBaseModel):
    """Stripe customer link, or null when no Stripe gateway account is configured."""

    customer_id: str = Field(alias="customerId")
    """Stripe customer ID."""


class StripeConnectionDict(TypedDict):
    customer_id: str
