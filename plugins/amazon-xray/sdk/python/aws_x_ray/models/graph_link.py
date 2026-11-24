from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GraphLink(SdkBaseModel):
    reference_type: Optional[str] = Field(default=UNSET, alias="ReferenceType")
    """Relationship of a trace to the corresponding service."""

    source_trace_id: Optional[str] = Field(default=UNSET, alias="SourceTraceId")
    """Source trace of a link relationship."""

    destination_trace_ids: Optional[list[str]] = Field(default=UNSET, alias="DestinationTraceIds")
    """Destination traces of a link relationship."""


class GraphLinkDict(TypedDict):
    reference_type: NotRequired[str]
    source_trace_id: NotRequired[str]
    destination_trace_ids: NotRequired[list[str]]
