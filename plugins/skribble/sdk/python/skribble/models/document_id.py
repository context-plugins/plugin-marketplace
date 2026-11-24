from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.attachment_when_signed import AttachmentWhenSignedOrStr
from .enums.signature_legislation import SignatureLegislationOrStr
from .enums.signature_quality import SignatureQualityOrStr
from .signature_recipient import SignatureRecipient, SignatureRecipientDict


class DocumentId(SdkBaseModel):
    """Reference an existing document already uploaded to Skribble."""

    document_id: str
    """Document ID of an existing document on Skribble."""

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

    signatures: Optional[list[SignatureRecipient]] = UNSET
    """List of recipients required to sign the document.

    It is possible to create a SignatureRequest where one or more invited participants won't need a Skribble account to
    sign the SignatureRequest. Those signers are called No-Account-Signers (NAS).

    To invite a No-Account-Signer (NAS), include an entry in the signatures array without an ``account_email`` and
    provide the signer's details using ``signer_identity_data`` instead.

    Each entry in the signatures array will be treated as a distinct identity. This means two entries with the same
    ``signer_identity_data`` are treated as two different identities and require that this person signs the document
    twice.

    Optionally you can combine ``signer_identity_data`` and ``account_email`` in your requests. In this case, the system
    checks first if there is a Skribble account with the specified e-mail address. If one is found the existing Skribble
    user will be invited to sign the document. Otherwise, the specified user in ``signer_identity_data`` will be invited
    to sign.

    > **Good to know**
    > We recommend combining ``signer_identity_data`` and ``account_email`` if you are unsure whether the
    > user has a Skribble account.
    > The benefit is that an existing Skribble user will afterwards find the SignatureRequest in the
    > "To sign" section of their account on my.skribble.com.
    > Conversely, if you invite them using only ``signer_identity_data``, the document will not appear in
    > their Skribble account, even if they have one. Instead, they will have to access the document
    > using the specific link provided in their signature invitation email.

    Missing fields like first name and last name can easily be adjusted by the signer through the Skribble web
    client."""

    cc_email_addresses: Optional[list[EmailStr]] = UNSET
    """Observer email addresses of users who are granted read access and to whom notifications are sent. Any email
    address is accepted, regardless of whether the recipient already has a Skribble account. If the observer does not
    yet have an account, they will need to create one to access the document."""

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

    Omit or send ``null`` to leave the request without an owner-set expiry."""

    attach_on_success: Optional[list[AttachmentWhenSignedOrStr]] = UNSET
    """When a SignatureRequest has been signed by all signers, all signers and all observers are notified by email.
    Skribble provides the option to attach two types of attachments automatically to this email:
      - the signed document and
      - the signature protocol.

    This can be configured via the business settings, which can be used to define that these documents should generally
    be attached for all SignatureRequests created by business members.

    Alternatively it is possible to define the attachments on demand per SignatureRequest by using this field."""

    creator: Optional[EmailStr] = UNSET
    """Set a business member as the owner of this signature request, in addition to the API user."""

    write_access: Optional[list[EmailStr]] = UNSET
    """Users or API keys with write access to this signature request."""


class DocumentIdDict(TypedDict):
    document_id: str
    title: str
    message: NotRequired[str]
    legislation: NotRequired[SignatureLegislationOrStr]
    quality: NotRequired[SignatureQualityOrStr]
    signatures: NotRequired[list[SignatureRecipientDict]]
    cc_email_addresses: NotRequired[list[EmailStr]]
    callback_success_url: NotRequired[str]
    callback_error_url: NotRequired[str]
    callback_update_url: NotRequired[str]
    callback_start_sign_url: NotRequired[str]
    callback_ident_pending_url: NotRequired[str]
    callback_ident_error_url: NotRequired[str]
    custom: NotRequired[str]
    expires_at: NotRequired[Date]
    attach_on_success: NotRequired[list[AttachmentWhenSignedOrStr]]
    creator: NotRequired[EmailStr]
    write_access: NotRequired[list[EmailStr]]
