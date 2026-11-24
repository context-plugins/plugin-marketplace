from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DocRequest(SdkBaseModel):
    doc_id: str = Field(alias="docId")
    """Document id that will be permanently deleted."""


class DocRequestDict(TypedDict):
    doc_id: str
