from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data1(SdkBaseModel):
    doc_tree_id: Optional[str] = Field(default=UNSET, alias="docTreeId")
    """Returned created/updated open api tree structure."""


class Data1Dict(TypedDict):
    doc_tree_id: NotRequired[str]
