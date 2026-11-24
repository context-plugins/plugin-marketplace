from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.signature_language import SignatureLanguage, SignatureLanguageOrStr


class SignerIdentityDataInResponse(SdkBaseModel):
    """Signer identity information returned as part of the SignatureRequest response."""

    email_address: Optional[EmailStr] = UNSET
    """Email address of the no-account-signer."""

    first_name: Optional[str] = UNSET
    """First name of the no-account-signer."""

    last_name: Optional[str] = UNSET
    """Last name of the no-account-signer."""

    mobile_number: Optional[str] = UNSET
    """Mobile number of the no-account-signer in E.164 format without the leading ``+``: country code + area code +
    number, no spaces or special characters."""

    language: SignatureLanguageOrStr = SignatureLanguage.EN
    """Determines in which language e-mails are sent to the user, if the user has not set their language preference
    yet."""

    identity_reference: Optional[str] = UNSET
    """Customer-generated identifier for further identification of the signer."""

    identification_require_evidence: Optional[bool] = UNSET
    """If set, a new identification process is started to get fresh evidence records, even if the signer is already
    identified."""

    force_standard_qes: Optional[bool] = UNSET
    """If set to ``true``, this signer is always identified via the standard QES flow and is never routed through
    Express QES, regardless of the business's Express QES setting or other identity flags such as
    ``identification_require_evidence``."""

    provider: Optional[str] = UNSET
    """Evidence provider used to verify the signer's identity."""

    evidence_id: Optional[str] = UNSET
    """ID of the evidence records created during identification. Populated in the ``SignatureRequest`` response once the
    identification process has been completed."""


class SignerIdentityDataInResponseDict(TypedDict):
    email_address: NotRequired[EmailStr]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    mobile_number: NotRequired[str]
    language: NotRequired[SignatureLanguageOrStr]
    identity_reference: NotRequired[str]
    identification_require_evidence: NotRequired[bool]
    force_standard_qes: NotRequired[bool]
    provider: NotRequired[str]
    evidence_id: NotRequired[str]
