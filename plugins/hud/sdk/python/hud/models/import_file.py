from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ImportFile(SdkBaseModel):
    id: UUID
    filename: str
    size_bytes: int


class ImportFileDict(TypedDict):
    id: UUID
    filename: str
    size_bytes: int
