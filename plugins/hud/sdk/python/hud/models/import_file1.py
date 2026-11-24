from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ImportFile1(SdkBaseModel):
    """The bundle, as it was when the import started"""

    id: UUID
    filename: str
    size_bytes: int


class ImportFile1Dict(TypedDict):
    id: UUID
    filename: str
    size_bytes: int
