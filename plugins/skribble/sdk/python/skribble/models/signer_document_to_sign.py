from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class SignerDocumentToSign(SdkBaseModel):
    document_id: Optional[UUID] = UNSET
    """Unique Document ID."""

    visual_signature: OptionalNullable[Any] = UNSET


class SignerDocumentToSignDict(TypedDict):
    document_id: NotRequired[UUID]
    visual_signature: NotRequired[Any | None]
