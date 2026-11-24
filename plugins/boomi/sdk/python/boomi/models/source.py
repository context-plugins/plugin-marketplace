from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source(SdkBaseModel):
    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    """ID of the contributing source system."""

    record_id: Optional[str] = Field(default=UNSET, alias="recordId")
    """ID of the record in the source system."""


class SourceDict(TypedDict):
    source_id: NotRequired[str]
    record_id: NotRequired[str]
