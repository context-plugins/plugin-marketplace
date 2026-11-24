from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Payment(SdkBaseModel):
    """Request a payment from the signer once they've signed ("sign then pay" — the signature is never blocked by
    payment). Requires an active Stripe Connect account for your organization (see Settings > Paiement à la signature),
    or the request is rejected with a 422. JuriSign never holds the funds: they go directly to your own Stripe account,
    minus a fixed 0.90€ platform fee."""

    amount_cents: int
    """Amount to collect from the signer, in cents."""

    currency: str = "eur"
    description: OptionalNullable[str] = UNSET


class PaymentDict(TypedDict):
    amount_cents: int
    currency: NotRequired[str]
    description: NotRequired[str | None]
