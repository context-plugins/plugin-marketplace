from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.attachment_when_signed import AttachmentWhenSignedOrStr
from .enums.signature_legislation import SignatureLegislationOrStr
from .enums.signature_quality import SignatureQualityOrStr
from .signature_recipient import SignatureRecipient, SignatureRecipientDict


class UpdateSignatureRequest1(SdkBaseModel):
    id: UUID
    """Unique ID of the signature request."""

    title: Optional[str] = UNSET
    """Title of the signature request."""

    message: Optional[str] = UNSET
    """Message sent to the other participants along with this signature request."""

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

    signatures: OptionalNullable[list[SignatureRecipient]] = UNSET
    cc_email_addresses: OptionalNullable[list[EmailStr]] = UNSET
    callback_success_url: Optional[str] = UNSET
    """Callback-URL which is called on overall success."""

    callback_error_url: Optional[str] = UNSET
    """Callback-URL which is called in case of an error."""

    callback_update_url: Optional[str] = UNSET
    """Callback-URL which is called in case of an update."""

    callback_start_sign_url: Optional[str] = UNSET
    """Callback-URL which is called when a signer starts the signature process (only for Express QES)."""

    callback_ident_pending_url: Optional[str] = UNSET
    """Callback-URL which is called when the identification of a signer requires manual review."""

    callback_ident_error_url: Optional[str] = UNSET
    """Callback-URL which is called when the identification of a signer ends in an error."""

    attach_on_success: OptionalNullable[list[AttachmentWhenSignedOrStr]] = UNSET
    write_access: OptionalNullable[list[str]] = UNSET


class UpdateSignatureRequest1Dict(TypedDict):
    id: UUID
    title: NotRequired[str]
    message: NotRequired[str]
    legislation: NotRequired[SignatureLegislationOrStr]
    quality: NotRequired[SignatureQualityOrStr]
    signatures: NotRequired[list[SignatureRecipientDict] | None]
    cc_email_addresses: NotRequired[list[EmailStr] | None]
    callback_success_url: NotRequired[str]
    callback_error_url: NotRequired[str]
    callback_update_url: NotRequired[str]
    callback_start_sign_url: NotRequired[str]
    callback_ident_pending_url: NotRequired[str]
    callback_ident_error_url: NotRequired[str]
    attach_on_success: NotRequired[list[AttachmentWhenSignedOrStr] | None]
    write_access: NotRequired[list[str] | None]
