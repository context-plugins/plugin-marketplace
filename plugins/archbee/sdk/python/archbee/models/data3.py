from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data3(SdkBaseModel):
    doc_id: Optional[str] = Field(default=UNSET, alias="docId")
    """Created Doc id (first doc in case of archive tree)."""


class Data3Dict(TypedDict):
    doc_id: NotRequired[str]
