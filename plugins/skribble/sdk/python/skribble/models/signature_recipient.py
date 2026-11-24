from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.signature_language import SignatureLanguage, SignatureLanguageOrStr
from .signer_identity_data import SignerIdentityData, SignerIdentityDataDict
from .unions.visual_signature import VisualSignature, VisualSignatureDict


class SignatureRecipient(SdkBaseModel):
    account_email: Optional[EmailStr] = UNSET
    """Optional signer account email address."""

    sequence: int = -1
    """Optional signing order for this signer, starting at ``1``. If no sequence is supplied, signers can sign in any
    order. When a number is set, Skribble enforces an ascending signing order across all signers, based on their
    ``sequence`` values."""

    notify: bool = True
    """Whether to send a notification to this signer."""

    language: SignatureLanguageOrStr = SignatureLanguage.EN
    """Determines in which language e-mails are sent to the user, if the user has not set their language preference
    yet."""

    signer_identity_data: Optional[SignerIdentityData] = UNSET
    """Optional (no-account) signer identity information."""

    visual_signature: Optional[VisualSignature] = UNSET
    """Visual signature placement information."""


class SignatureRecipientDict(TypedDict):
    account_email: NotRequired[EmailStr]
    sequence: NotRequired[int]
    notify: NotRequired[bool]
    language: NotRequired[SignatureLanguageOrStr]
    signer_identity_data: NotRequired[SignerIdentityDataDict]
    visual_signature: NotRequired[VisualSignatureDict]
