from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.signature_legislation2 import SignatureLegislation2OrStr
from .enums.signature_quality2 import SignatureQuality2OrStr
from .enums.signature_status_code import SignatureStatusCodeOrStr
from .signer_document_to_sign import SignerDocumentToSign, SignerDocumentToSignDict
from .signer_identity_data_in_response import SignerIdentityDataInResponse, SignerIdentityDataInResponseDict


class SignatureCallbacksResponse(SdkBaseModel):
    sid: Optional[UUID] = UNSET
    account_email: Optional[EmailStr] = UNSET
    document_signatures: Optional[list[SignerDocumentToSign]] = UNSET
    signer_identity_data: Optional[SignerIdentityDataInResponse] = UNSET
    """Signer identity information returned as part of the SignatureRequest response."""

    sequence: Optional[int] = UNSET
    status_code: Optional[SignatureStatusCodeOrStr] = UNSET
    """The state of a signature.

    Possible values:
      - **DRAFT** The signature request has not yet been placed.
      - **OPEN** Waiting for the user to sign a signature.
      - **WAITING** The signer is waiting for a preceding signer in the sequence to complete.
      - **DECLINED** The user declined to sign.
      - **WITHDRAWN** The owner has withdrawn the signature request.
      - **SIGNED** The user signed the document.
      - **ERROR** A technical error occurred."""

    notify: Optional[bool] = UNSET
    """Whether Skribble sends notification emails to this signer. When set to ``false`` together with
    ``signer_identity_data.identity_reference``, the TAN-based email validation for No-Account-Signers (SES) is
    skipped."""

    signing_url: Optional[str] = UNSET
    """A personalized signing URL for this specific signer, distinct from the top-level signing_url of the
    SignatureRequest. It points to the Skribble web application and will directly open the document for signing provided
    that the user is known to Skribble and is logged in. Otherwise, the user must login or register first to be able to
    see the document.

    When the user visits this URL, they will be forwarded to a special preview page of the PDF document and can start
    the signature process as usual.

    You can add the following query parameters to this signing_url. Skribble will respect these parameters and redirect
    the user to the provided URLs once the signature process is finished.

    Example:
    ``https://my.skribble.com/view/4f43614a-de50-bfe1-2df3-4c881fc7840e/cd16bd0802d146fd94ff736d7d7bf551?exitURL=https%3A%2F%2Fmy-app.com%2Fsigned&redirectTimeout=10``

    | Parameter | Type | Description |
    | --- | --- | --- |
    | ``exitURL`` | string (URL-encoded) | Optional URL to redirect after the signature process finished. Example:
        ``https%3A%2F%2Fgoogle.com`` |
    | ``errorURL`` | string (URL-encoded) | Optional URL to redirect in case of an error. Defaults to ``exitURL``.
        Ignored if ``exitURL`` is not set. Example: ``https%3A%2F%2Fbing.com`` |
    | ``declineURL`` | string (URL-encoded) | Optional URL to redirect when the user declines. Defaults to ``exitURL``.
        Ignored if ``exitURL`` is not set. |
    | ``hidedownload`` | boolean | Optional flag to hide the download button on the success screen. Requires ``exitURL``
        to be set. Example: ``true`` |
    | ``redirectTimeout`` | integer | Optional seconds before auto-redirect after signing. Min 0 (instant), max 90.
        Default: 45. Example: ``20`` |
    | ``lang`` | string | Optional language code to display the signing page in a specific language. Supported values:
        ``en`` (default), ``de``, ``fr``. Example: ``lang=fr`` |
    | ``overlay`` | boolean | Optional flag to show or hide the Skribble overlay on the signing page. |"""

    decline_message: Optional[str] = UNSET
    """The message provided by the signer when declining the signature request. Only present if the signer declined and
    provided a message."""

    signed_at: Optional[RFC3339DateTime] = UNSET
    """Timestamp when this signer signed the document."""

    signed_legislation: Optional[SignatureLegislation2OrStr] = UNSET
    """The legislation under which this signer's signature was created. Only present after signing."""

    signed_quality: Optional[SignatureQuality2OrStr] = UNSET
    """The actual quality of this signer's signature. Only present after signing."""

    last_viewed_at: Optional[RFC3339DateTime] = UNSET
    """Timestamp when this signer last viewed the document."""

    language: Optional[str] = UNSET
    """Language preference for this signer."""

    invited_by: Optional[str] = UNSET


class SignatureCallbacksResponseDict(TypedDict):
    sid: NotRequired[UUID]
    account_email: NotRequired[EmailStr]
    document_signatures: NotRequired[list[SignerDocumentToSignDict]]
    signer_identity_data: NotRequired[SignerIdentityDataInResponseDict]
    sequence: NotRequired[int]
    status_code: NotRequired[SignatureStatusCodeOrStr]
    notify: NotRequired[bool]
    signing_url: NotRequired[str]
    decline_message: NotRequired[str]
    signed_at: NotRequired[RFC3339DateTime]
    signed_legislation: NotRequired[SignatureLegislation2OrStr]
    signed_quality: NotRequired[SignatureQuality2OrStr]
    last_viewed_at: NotRequired[RFC3339DateTime]
    language: NotRequired[str]
    invited_by: NotRequired[str]
