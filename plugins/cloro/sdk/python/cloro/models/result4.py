from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .source6 import Source6, Source6Dict


class Result4(SdkBaseModel):
    """Grok response data"""

    text: Optional[str] = UNSET
    """Grok's response text"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response."""

    sources: Optional[list[Source6]] = UNSET
    """Array of sources referenced in the response with enhanced metadata"""

    search_queries: Optional[list[str]] = Field(default=UNSET, alias="searchQueries")
    """Array of search queries Grok used to gather information for the response"""

    model: OptionalNullable[str] = UNSET
    """The model identifier used to generate the response"""

    markdown: Optional[str] = UNSET
    """Grok's response formatted in Markdown (included when include.markdown is true)"""

    raw_response: Optional[list[Any]] = Field(default=UNSET, alias="rawResponse")
    """Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire
    protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without
    notice — use it for debugging or to access data not yet surfaced in the structured fields above."""


class Result4Dict(TypedDict):
    text: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[Source6Dict]]
    search_queries: NotRequired[list[str]]
    model: NotRequired[str | None]
    markdown: NotRequired[str]
    raw_response: NotRequired[list[Any]]
