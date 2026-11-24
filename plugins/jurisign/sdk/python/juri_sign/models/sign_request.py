from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .document_juri_sign_sign_requests_api import DocumentJuriSignSignRequestsApi, DocumentJuriSignSignRequestsApiDict
from .enums.signing_order_type1 import SigningOrderType1OrStr
from .enums.status_juri_sign_sign_requests_api import StatusJuriSignSignRequestsApiOrStr
from .payment1 import Payment1, Payment1Dict
from .progress import Progress, ProgressDict
from .signer2 import Signer2, Signer2Dict


class SignRequest(SdkBaseModel):
    id: Optional[UUID] = UNSET
    subject: Optional[str] = UNSET
    message: OptionalNullable[str] = UNSET
    status: Optional[StatusJuriSignSignRequestsApiOrStr] = UNSET
    signing_order_type: Optional[SigningOrderType1OrStr] = UNSET
    extended_retention: Optional[bool] = UNSET
    """True if your organization's commercial contract includes the extended archiving option (10 years). Informational
    only — reflects the billed option, not a distinct technical purge policy."""

    progress: Optional[Progress] = UNSET
    redirect_url: OptionalNullable[str] = UNSET
    """URL shown to the signer as an explicit "return to <domain>" button on the success page. Must use https and match
    the domain declared for your organization (contact support to register it)."""

    payment: OptionalNullable[Payment1] = UNSET
    """Present only when a payment was requested on this sign request (see the ``payment`` field on creation). The
    signer is invited to pay only after signing ("sign then pay") — ``checkout_url`` is null until the sign request is
    fully signed."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    sent_at: OptionalNullable[RFC3339DateTime] = UNSET
    completed_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    document: Optional[DocumentJuriSignSignRequestsApi] = UNSET
    created_by: Optional[CreatedBy] = UNSET
    signers: Optional[list[Signer2]] = UNSET


class SignRequestDict(TypedDict):
    id: NotRequired[UUID]
    subject: NotRequired[str]
    message: NotRequired[str | None]
    status: NotRequired[StatusJuriSignSignRequestsApiOrStr]
    signing_order_type: NotRequired[SigningOrderType1OrStr]
    extended_retention: NotRequired[bool]
    progress: NotRequired[ProgressDict]
    redirect_url: NotRequired[str | None]
    payment: NotRequired[Payment1Dict | None]
    expires_at: NotRequired[RFC3339DateTime]
    sent_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    document: NotRequired[DocumentJuriSignSignRequestsApiDict]
    created_by: NotRequired[CreatedByDict]
    signers: NotRequired[list[Signer2Dict]]
