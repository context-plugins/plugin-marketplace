from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CitationPill11(SdkBaseModel):
    position: int
    """1-based position of this source in the sibling ``result.sources`` array."""

    label: str
    """Title of the cited source, the same as its ``label`` in ``result.sources``. Can be an empty string."""

    url: str
    """Direct URL of the cited source."""

    domain: str
    """Host extracted from ``url``, for grouping and display."""

    citation_pill_id: int = Field(alias="citationPillId")
    """1-based ordinal that all entries from the same chip share."""


class CitationPill11Dict(TypedDict):
    position: int
    label: str
    url: str
    domain: str
    citation_pill_id: int
