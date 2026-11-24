from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignatureDocument(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique Document ID."""


class SignatureDocumentDict(TypedDict):
    id: NotRequired[UUID]
