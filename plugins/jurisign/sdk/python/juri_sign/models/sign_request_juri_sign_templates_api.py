from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .document1 import Document1, Document1Dict
from .enums.signing_order_type_juri_sign_templates_api import SigningOrderTypeJuriSignTemplatesApiOrStr
from .enums.status_juri_sign_sign_requests_api import StatusJuriSignSignRequestsApiOrStr
from .payment_juri_sign_templates_api import PaymentJuriSignTemplatesApi, PaymentJuriSignTemplatesApiDict
from .progress import Progress, ProgressDict
from .signer1_juri_sign_templates_api import Signer1JuriSignTemplatesApi, Signer1JuriSignTemplatesApiDict


class SignRequestJuriSignTemplatesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    subject: Optional[str] = UNSET
    message: OptionalNullable[str] = UNSET
    status: Optional[StatusJuriSignSignRequestsApiOrStr] = UNSET
    signing_order_type: Optional[SigningOrderTypeJuriSignTemplatesApiOrStr] = UNSET
    extended_retention: Optional[bool] = UNSET
    """True if your organization's commercial contract includes the extended archiving option (10 years). Informational
    only — reflects the billed option, not a distinct technical purge policy."""

    progress: Optional[Progress] = UNSET
    redirect_url: OptionalNullable[str] = UNSET
    """URL shown to the signer as an explicit "return to <domain>" button on the success page. Must use https and match
    the domain declared for your organization (contact support to register it)."""

    payment: OptionalNullable[PaymentJuriSignTemplatesApi] = UNSET
    """Present only when a payment was requested on this sign request (see the ``payment`` field on creation). The
    signer is invited to pay only after signing ("sign then pay") — ``checkout_url`` is null until the sign request is
    fully signed."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    sent_at: OptionalNullable[RFC3339DateTime] = UNSET
    completed_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    document: Optional[Document1] = UNSET
    created_by: Optional[CreatedBy] = UNSET
    signers: Optional[list[Signer1JuriSignTemplatesApi]] = UNSET


class SignRequestJuriSignTemplatesApiDict(TypedDict):
    id: NotRequired[UUID]
    subject: NotRequired[str]
    message: NotRequired[str | None]
    status: NotRequired[StatusJuriSignSignRequestsApiOrStr]
    signing_order_type: NotRequired[SigningOrderTypeJuriSignTemplatesApiOrStr]
    extended_retention: NotRequired[bool]
    progress: NotRequired[ProgressDict]
    redirect_url: NotRequired[str | None]
    payment: NotRequired[PaymentJuriSignTemplatesApiDict | None]
    expires_at: NotRequired[RFC3339DateTime]
    sent_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    document: NotRequired[Document1Dict]
    created_by: NotRequired[CreatedByDict]
    signers: NotRequired[list[Signer1JuriSignTemplatesApiDict]]
