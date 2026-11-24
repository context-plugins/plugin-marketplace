from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.attachment_when_signed import AttachmentWhenSignedOrStr
from .enums.signature_legislation import SignatureLegislationOrStr
from .enums.signature_quality import SignatureQualityOrStr
from .enums.signature_status_overall_skribble_signature_attachment_api import (
    SignatureStatusOverallSkribbleSignatureAttachmentApiOrStr,
)
from .signature_attachment import SignatureAttachment, SignatureAttachmentDict
from .signature_callbacks_response_skribble_signature_attachment_api import (
    SignatureCallbacksResponseSkribbleSignatureAttachmentApi,
    SignatureCallbacksResponseSkribbleSignatureAttachmentApiDict,
)


class SignatureResponseSkribbleSignatureAttachmentApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    title: Optional[str] = UNSET
    message: Optional[str] = UNSET
    document_id: Optional[UUID] = UNSET
    legislation: Optional[SignatureLegislationOrStr] = UNSET
    """Legislation under which the signatures are created. Required when ``quality`` is ``QES`` or ``AES_MINIMAL``.

    | Legislation | Description |
    | --- | --- |
    | **ZERTES** | QES according to Swiss law. This is the **default**. |
    | **EIDAS** | QES according to EU law. |"""

    quality: Optional[SignatureQualityOrStr] = UNSET
    """Minimal quality of the signatures for this signature request.

    | Quality | Description |
    | --- | --- |
    | **QES** | Every signer must use QES. This is the **default** quality. Requires a ``legislation`` parameter. |
    | **AES_MINIMAL** | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a
        ``legislation`` parameter. |
    | **AES** | Every signer uses AES. |
    | **SES** | Every signer uses SES. |
    | **DEMO** | Every signer uses a DEMO signature with **no legal binding**. API demo users (``api_demo_example_*``)
        get this quality by default. |
    | **PART11** | Signers use a signature compliant with 21 CFR Part 11 regulations. |"""

    signing_url: Optional[str] = UNSET
    """The URL for the SignatureRequest owner to view and manage the request in the Skribble web application. This URL
    is not intended for signers — each signer has their own dedicated signing_url within the signatures array."""

    status_overall: Optional[SignatureStatusOverallSkribbleSignatureAttachmentApiOrStr] = UNSET
    """Overall signing status of the document.

    Possible values:
      - **OPEN** At least one user has not signed or declined their signature yet.
      - **DECLINED** At least one user declined to sign. The signature request failed.
      - **WITHDRAWN** The owner has withdrawn the signature request.
      - **SIGNED** All users signed the document. The signature request was successfully completed.
      - **EXPIRED** The owner-set ``expires_at`` date has passed before all signers signed. Terminal status.
      - **ERROR** A technical error occurred. The signature request cannot be completed."""

    business: Optional[str] = UNSET
    signatures: Optional[list[SignatureCallbacksResponseSkribbleSignatureAttachmentApi]] = UNSET
    cc_email_addresses: Optional[list[EmailStr]] = UNSET
    auto_delete_at: Optional[Date] = UNSET
    """Server-managed date on which this signature request and its related documents are automatically deleted in line
    with the owning business's retention policy. Not directly settable by API clients. May be absent or ``null`` when no
    retention policy applies."""

    expires_at: Optional[Date] = UNSET
    """Owner-set expiry date for this signature request. When this date passes, the request transitions to
    ``status_overall=EXPIRED``. Set via ``expires_at`` at create time. Absent or ``null`` when no owner-set expiry has
    been configured."""

    attachments: Optional[list[SignatureAttachment]] = UNSET
    attach_on_success: Optional[list[AttachmentWhenSignedOrStr]] = UNSET
    """When a SignatureRequest has been signed by all signers, all signers and all observers are notified by email.
    Skribble provides the option to attach two types of attachments automatically to this email:
      - the signed document and
      - the signature protocol.

    This can be configured via the business settings, which can be used to define that these documents should generally
    be attached for all SignatureRequests created by business members.

    Alternatively it is possible to define the attachments on demand per SignatureRequest by using this field."""

    custom: Optional[str] = UNSET
    """Custom field for storing application-specific data related to this signature request."""

    owner: Optional[str] = UNSET
    read_access: Optional[list[str]] = UNSET
    """Users or API keys with read access to this signature request."""

    write_access: Optional[list[str]] = UNSET
    """Users or API keys with write access to this signature request."""

    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET
    callback_success_url: Optional[str] = UNSET
    """Callback URL called on overall success. See the request schema for supported placeholders and retry behaviour."""

    callback_error_url: Optional[str] = UNSET
    """Callback URL called when a signer declines or the request is withdrawn. See the request schema for supported
    placeholders and retry behaviour."""

    callback_update_url: Optional[str] = UNSET
    """Callback URL called on any update (e.g. one signer signed). See the request schema for supported placeholders and
    retry behaviour."""

    callback_start_sign_url: Optional[str] = UNSET
    """Callback URL called when a signer starts the signature process (only for Express QES). See the request schema for
    supported placeholders and retry behaviour."""

    callback_ident_pending_url: Optional[str] = UNSET
    """Callback URL called when the identification of a signer requires manual review. See the request schema for
    supported placeholders and retry behaviour."""

    callback_ident_error_url: Optional[str] = UNSET
    """Callback URL called when the identification of a signer ends in an error. See the request schema for supported
    placeholders and retry behaviour."""


class SignatureResponseSkribbleSignatureAttachmentApiDict(TypedDict):
    id: NotRequired[UUID]
    title: NotRequired[str]
    message: NotRequired[str]
    document_id: NotRequired[UUID]
    legislation: NotRequired[SignatureLegislationOrStr]
    quality: NotRequired[SignatureQualityOrStr]
    signing_url: NotRequired[str]
    status_overall: NotRequired[SignatureStatusOverallSkribbleSignatureAttachmentApiOrStr]
    business: NotRequired[str]
    signatures: NotRequired[list[SignatureCallbacksResponseSkribbleSignatureAttachmentApiDict]]
    cc_email_addresses: NotRequired[list[EmailStr]]
    auto_delete_at: NotRequired[Date]
    expires_at: NotRequired[Date]
    attachments: NotRequired[list[SignatureAttachmentDict]]
    attach_on_success: NotRequired[list[AttachmentWhenSignedOrStr]]
    custom: NotRequired[str]
    owner: NotRequired[str]
    read_access: NotRequired[list[str]]
    write_access: NotRequired[list[str]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    callback_success_url: NotRequired[str]
    callback_error_url: NotRequired[str]
    callback_update_url: NotRequired[str]
    callback_start_sign_url: NotRequired[str]
    callback_ident_pending_url: NotRequired[str]
    callback_ident_error_url: NotRequired[str]
