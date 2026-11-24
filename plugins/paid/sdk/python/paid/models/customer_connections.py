from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .stripe_connection import StripeConnection, StripeConnectionDict


class CustomerConnections(SdkBaseModel):
    """Linked external system IDs for this customer."""

    stripe: StripeConnection
    """Stripe customer link, or null when no Stripe gateway account is configured."""


class CustomerConnectionsDict(TypedDict):
    stripe: StripeConnectionDict
