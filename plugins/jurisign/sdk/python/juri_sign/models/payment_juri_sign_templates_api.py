from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status1_juri_sign_sign_requests_api import Status1JuriSignSignRequestsApiOrStr


class PaymentJuriSignTemplatesApi(SdkBaseModel):
    """Present only when a payment was requested on this sign request (see the ``payment`` field on creation). The
    signer is invited to pay only after signing ("sign then pay") — ``checkout_url`` is null until the sign request is
    fully signed."""

    status: Optional[Status1JuriSignSignRequestsApiOrStr] = UNSET
    amount_cents: Optional[int] = UNSET
    currency: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    checkout_url: OptionalNullable[str] = UNSET
    """Stripe Checkout link, only present while status is processing (i.e. the sign request has been fully signed and
    the signer has not yet paid)."""

    paid_at: OptionalNullable[RFC3339DateTime] = UNSET


class PaymentJuriSignTemplatesApiDict(TypedDict):
    status: NotRequired[Status1JuriSignSignRequestsApiOrStr]
    amount_cents: NotRequired[int]
    currency: NotRequired[str]
    description: NotRequired[str | None]
    checkout_url: NotRequired[str | None]
    paid_at: NotRequired[RFC3339DateTime | None]
