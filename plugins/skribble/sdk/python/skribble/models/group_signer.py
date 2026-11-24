from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .signer_document_to_sign import SignerDocumentToSign, SignerDocumentToSignDict


class GroupSigner(SdkBaseModel):
    sequence: int = -1
    """Optional signing order for this signer, starting at ``1``. If no sequence is supplied, signers can sign in any
    order. When a number is set, Skribble enforces an ascending signing order across all signers, based on their
    ``sequence`` values."""

    notify: bool = True
    """Whether to send a notification to this signer."""

    document_signatures: Optional[list[SignerDocumentToSign]] = UNSET
    """Visual signatures to place on the document."""

    signer_group_id: str
    """Signer group ID."""


class GroupSignerDict(TypedDict):
    sequence: NotRequired[int]
    notify: NotRequired[bool]
    document_signatures: NotRequired[list[SignerDocumentToSignDict]]
    signer_group_id: str
