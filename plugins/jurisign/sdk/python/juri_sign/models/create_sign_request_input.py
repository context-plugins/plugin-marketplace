from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.signing_order_type import SigningOrderTypeOrInt
from .payment import Payment, PaymentDict
from .signer import Signer, SignerDict
from .zone import Zone, ZoneDict


class CreateSignRequestInput(SdkBaseModel):
    document_id: UUID
    """UUID of a previously uploaded document"""

    subject: str
    """Email subject line for signers"""

    message: OptionalNullable[str] = UNSET
    """Optional message included in the invitation email"""

    metadata: OptionalNullable[Any] = UNSET
    """Arbitrary key-value metadata for your records"""

    redirect_url: OptionalNullable[str] = UNSET
    """Must use https and match the domain declared for your organization, or the request is rejected with a 422.
    Contact support to register your domain."""

    payment: OptionalNullable[Payment] = UNSET
    """Request a payment from the signer once they've signed ("sign then pay" — the signature is never blocked by
    payment). Requires an active Stripe Connect account for your organization (see Settings > Paiement à la signature),
    or the request is rejected with a 422. JuriSign never holds the funds: they go directly to your own Stripe account,
    minus a fixed 0.90€ platform fee."""

    signing_order_type: SigningOrderTypeOrInt
    """0 = parallel (all signers at once), 1 = sequential (one after another)"""

    expiry_hours: int
    """Hours until the request expires (max 30 days)"""

    signers: list[Signer]
    zones: OptionalNullable[list[Zone]] = UNSET
    """Signature zone positions. Auto-generated at bottom of last page if omitted."""

    require_selfie: bool = False
    """Require signers to take a selfie for identity verification"""


class CreateSignRequestInputDict(TypedDict):
    document_id: UUID
    subject: str
    message: NotRequired[str | None]
    metadata: NotRequired[Any | None]
    redirect_url: NotRequired[str | None]
    payment: NotRequired[PaymentDict | None]
    signing_order_type: SigningOrderTypeOrInt
    expiry_hours: int
    signers: list[SignerDict]
    zones: NotRequired[list[ZoneDict] | None]
    require_selfie: NotRequired[bool]
