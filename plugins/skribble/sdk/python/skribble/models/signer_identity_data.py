from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.signature_language import SignatureLanguage, SignatureLanguageOrStr


class SignerIdentityData(SdkBaseModel):
    """Optional (no-account) signer identity information."""

    email_address: Optional[EmailStr] = UNSET
    """Email address of no-account-signer. Mandatory when ``quality`` is ``SES``."""

    first_name: Optional[str] = UNSET
    """First name of no-account-signer"""

    last_name: Optional[str] = UNSET
    """Last name of no-account-signer"""

    mobile_number: Optional[str] = UNSET
    """Mobile number of the no-account-signer in E.164 format without the leading ``+``: country code + area code +
    number, no spaces or special characters."""

    language: SignatureLanguageOrStr = SignatureLanguage.EN
    """Determines in which language e-mails are sent to the user, if the user has not set their language preference
    yet."""

    provider: Optional[str] = UNSET
    """Evidence provider where Skribble can verify the signer's identity data."""

    identity_reference: Optional[str] = UNSET
    """Optional customer-generated identifier for further identification. When set together with ``notify: false``, the
    TAN-based email validation for No-Account-Signers (SES) is skipped, allowing signers to sign directly without the
    Skribble TAN process."""

    identification_require_evidence: Optional[bool] = UNSET
    """(optional) if set, even if the signer is already identified, a new identification process is started to get fresh
    evidence records. Only supported when the signature request's quality is ``QES`` and Express QES is enabled for the
    business; otherwise the request fails with a validation error."""

    force_standard_qes: Optional[bool] = UNSET
    """(optional) if set to ``true``, this signer is always identified via the standard QES flow and is never routed
    through Express QES, regardless of the business's Express QES setting or other identity flags such as
    ``identification_require_evidence``."""


class SignerIdentityDataDict(TypedDict):
    email_address: NotRequired[EmailStr]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    mobile_number: NotRequired[str]
    language: NotRequired[SignatureLanguageOrStr]
    provider: NotRequired[str]
    identity_reference: NotRequired[str]
    identification_require_evidence: NotRequired[bool]
    force_standard_qes: NotRequired[bool]
