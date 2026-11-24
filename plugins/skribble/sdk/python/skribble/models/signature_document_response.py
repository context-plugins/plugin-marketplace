from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignatureDocumentResponse(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique Document ID."""

    name: Optional[str] = UNSET
    """Document Name."""

    version_id: Optional[UUID] = UNSET
    """Document Version ID."""


class SignatureDocumentResponseDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    version_id: NotRequired[UUID]
