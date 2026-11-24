from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .signer_document_to_sign import SignerDocumentToSign, SignerDocumentToSignDict
from .signer_identity_data import SignerIdentityData, SignerIdentityDataDict


class UserSigner(SdkBaseModel):
    sequence: int = -1
    """Optional signing order for this signer, starting at ``1``. If no sequence is supplied, signers can sign in any
    order. When a number is set, Skribble enforces an ascending signing order across all signers, based on their
    ``sequence`` values."""

    notify: bool = True
    """Whether to send a notification to this signer."""

    document_signatures: Optional[list[SignerDocumentToSign]] = UNSET
    """Visual signatures to place on the document."""

    account_email: Optional[EmailStr] = UNSET
    """Optional signer account email address."""

    signer_identity_data: Optional[SignerIdentityData] = UNSET
    """Optional (no-account) signer identity information."""


class UserSignerDict(TypedDict):
    sequence: NotRequired[int]
    notify: NotRequired[bool]
    document_signatures: NotRequired[list[SignerDocumentToSignDict]]
    account_email: NotRequired[EmailStr]
    signer_identity_data: NotRequired[SignerIdentityDataDict]
