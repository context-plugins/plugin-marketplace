from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateSealResponse(SdkBaseModel):
    document_id: UUID
    """Generated document ID"""


class CreateSealResponseDict(TypedDict):
    document_id: UUID
