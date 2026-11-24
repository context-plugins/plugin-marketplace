from __future__ import annotations

from typing import Any

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .enums.attachment_when_signed import AttachmentWhenSignedOrStr
from .enums.signature_legislation import SignatureLegislationOrStr
from .enums.signature_quality import SignatureQualityOrStr
from .signature_document import SignatureDocument, SignatureDocumentDict


class CreateSignatureRequest(SdkBaseModel):
    title: str
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

    documents: list[SignatureDocument]
    """List of documents to be signed (Maximum 50)."""

    signatures: OptionalNullable[list[Any]] = UNSET
    callback_success_url: Optional[str] = UNSET
    """Callback URL called via POST when all signers have signed (overall success).

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the final signed document ID

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    callback_error_url: Optional[str] = UNSET
    """Callback URL called via POST when a signer declines or the SignatureRequest is withdrawn.

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the most recent document ID

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    callback_update_url: Optional[str] = UNSET
    """Callback URL called via POST on any change to the SignatureRequest (e.g. one signer has signed).

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the most recent document ID
    - ``SKRIBBLE_SIGNATURE_ID`` — the Signature ID (SID) of the signature just made

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    callback_start_sign_url: Optional[str] = UNSET
    """Callback URL called via POST when a signer starts the signature process (only for Express QES).

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the most recent document ID

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    callback_ident_pending_url: Optional[str] = UNSET
    """Callback URL called via POST when the identification of a signer requires manual review.

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the most recent document ID

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    callback_ident_error_url: Optional[str] = UNSET
    """Callback URL called via POST when the identification of a signer ends in an error.

    The URL supports the following placeholders, replaced with current SignatureRequest data before each call:
    - ``SKRIBBLE_SIGNATURE_REQUEST_ID`` — the SignatureRequest ID
    - ``SKRIBBLE_DOCUMENT_ID`` — the most recent document ID

    **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours. The endpoint can
    return a ``Retry-After`` header (seconds) to control the retry interval."""

    custom: Optional[str] = UNSET
    """Custom field for storing application-specific data related to this signature request."""

    expires_at: Optional[Date] = UNSET
    """**Early access.** This field is available to opted-in businesses only. To request access, contact
    `support@skribble.com <mailto:support@skribble.com>`__.

    Setting ``expires_at`` requires the signature-request expiry feature to be enabled for the business. If it is not,
    the request fails with ``403 Forbidden`` (problem type ``feature-not-enabled``).

    Owner-set expiry date for this signature request (ISO 8601 date, e.g. ``2026-12-31``).

    When set, the ``SignatureRequest`` transitions to ``status_overall=EXPIRED`` at the end of the given day if it has
    not been completed. ``EXPIRED`` is a terminal status.

    **Constraints**

    - Must be today or later.
    - Must be at most 6 months in the future.
    - If the owning business has a retention policy configured, ``expires_at`` must be at most
      one day before the configured retention deletion date.
    - Only settable while ``status_overall=DRAFT``.

    Omit or send ``null`` to leave the request without an owner-set expiry."""

    attach_on_success: OptionalNullable[list[AttachmentWhenSignedOrStr]] = UNSET
    creator: OptionalNullable[EmailStr] = UNSET
    write_access: OptionalNullable[list[EmailStr]] = UNSET


class CreateSignatureRequestDict(TypedDict):
    title: str
    message: NotRequired[str]
    legislation: NotRequired[SignatureLegislationOrStr]
    quality: NotRequired[SignatureQualityOrStr]
    documents: list[SignatureDocumentDict]
    signatures: NotRequired[list[Any] | None]
    callback_success_url: NotRequired[str]
    callback_error_url: NotRequired[str]
    callback_update_url: NotRequired[str]
    callback_start_sign_url: NotRequired[str]
    callback_ident_pending_url: NotRequired[str]
    callback_ident_error_url: NotRequired[str]
    custom: NotRequired[str]
    expires_at: NotRequired[Date]
    attach_on_success: NotRequired[list[AttachmentWhenSignedOrStr] | None]
    creator: NotRequired[EmailStr | None]
    write_access: NotRequired[list[EmailStr] | None]
