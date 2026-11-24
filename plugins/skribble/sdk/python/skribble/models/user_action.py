from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .document import Document, DocumentDict


class UserAction(SdkBaseModel):
    name: str
    ip: OptionalNullable[str] = UNSET
    time: str
    quality: OptionalNullable[str] = UNSET
    legislation: OptionalNullable[str] = UNSET
    document_id: OptionalNullable[str] = Field(default=UNSET, alias="documentId")
    document_sha256: OptionalNullable[str] = Field(default=UNSET, alias="documentSha256")
    document_page_count: int = Field(default=0, alias="documentPageCount")
    document_size: int = Field(default=0, alias="documentSize")
    documents: Optional[list[Document]] = UNSET
    message: OptionalNullable[str] = UNSET
    signature_id: OptionalNullable[str] = Field(default=UNSET, alias="signatureId")
    signers_added: Optional[list[str]] = Field(default=UNSET, alias="signersAdded")
    signers_removed: Optional[list[str]] = Field(default=UNSET, alias="signersRemoved")
    observers_added: Optional[list[str]] = Field(default=UNSET, alias="observersAdded")
    observers_removed: Optional[list[str]] = Field(default=UNSET, alias="observersRemoved")
    delegatees: Optional[list[str]] = UNSET
    delegated_signature_id: OptionalNullable[str] = Field(default=UNSET, alias="delegatedSignatureId")
    new_signature_ids: Optional[list[str]] = Field(default=UNSET, alias="newSignatureIds")
    certificate_subject: OptionalNullable[str] = Field(default=UNSET, alias="certificateSubject")
    certificate_serial: OptionalNullable[str] = Field(default=UNSET, alias="certificateSerial")
    certificate_issuer: OptionalNullable[str] = Field(default=UNSET, alias="certificateIssuer")
    signature_image: OptionalNullable[str] = Field(default=UNSET, alias="signatureImage")
    signer_groups_added: Optional[list[str]] = Field(default=UNSET, alias="signerGroupsAdded")
    signer_groups_removed: Optional[list[str]] = Field(default=UNSET, alias="signerGroupsRemoved")
    signer_group_name: OptionalNullable[str] = Field(default=UNSET, alias="signerGroupName")
    mab_evidence_id: OptionalNullable[str] = Field(default=UNSET, alias="mabEvidenceId")


class UserActionDict(TypedDict):
    name: str
    ip: NotRequired[str | None]
    time: str
    quality: NotRequired[str | None]
    legislation: NotRequired[str | None]
    document_id: NotRequired[str | None]
    document_sha256: NotRequired[str | None]
    document_page_count: NotRequired[int]
    document_size: NotRequired[int]
    documents: NotRequired[list[DocumentDict]]
    message: NotRequired[str | None]
    signature_id: NotRequired[str | None]
    signers_added: NotRequired[list[str]]
    signers_removed: NotRequired[list[str]]
    observers_added: NotRequired[list[str]]
    observers_removed: NotRequired[list[str]]
    delegatees: NotRequired[list[str]]
    delegated_signature_id: NotRequired[str | None]
    new_signature_ids: NotRequired[list[str]]
    certificate_subject: NotRequired[str | None]
    certificate_serial: NotRequired[str | None]
    certificate_issuer: NotRequired[str | None]
    signature_image: NotRequired[str | None]
    signer_groups_added: NotRequired[list[str]]
    signer_groups_removed: NotRequired[list[str]]
    signer_group_name: NotRequired[str | None]
    mab_evidence_id: NotRequired[str | None]
