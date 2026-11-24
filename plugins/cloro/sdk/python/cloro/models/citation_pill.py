from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CitationPill(SdkBaseModel):
    label: str
    """Per-source title from the citation event (e.g. ``"Microsoft 365 Documentation"``, ``"Productivity Best
    Practices"``). Always present; may be an empty string when the event ships no title — read ``domain`` / ``url`` for
    source identity in that case. Entries grouped under the same ``citationPillId`` carry different per-source
    labels."""

    citation_pill_id: int = Field(alias="citationPillId")
    """1-based ordinal shared by all entries from the same chip. Group by ``citationPillId`` to reconstruct the visible
    chip; the per-source ``label`` differs across entries within a chip."""

    url: str
    """Direct URL of the cited source."""

    domain: str
    """Host extracted from ``url``, for grouping and display."""

    description: Optional[str] = UNSET
    """Source description from the sources rail when Copilot ships one. Omitted when absent."""

    position: int
    """1-based position of this source in the sibling ``result.sources`` array."""


class CitationPillDict(TypedDict):
    label: str
    citation_pill_id: int
    url: str
    domain: str
    description: NotRequired[str]
    position: int
