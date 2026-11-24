from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CitationPill8(SdkBaseModel):
    label: str
    """Per-source title from the sources rail (for example ``"Best Laptops 2026 — Reuters"``). Empty string when the
    rail has no title for this source — consumers should read ``domain`` / ``url`` for source identity in that case.
    Entries grouped under the same ``citationPillId`` carry different per-source labels."""

    citation_pill_id: int = Field(alias="citationPillId")
    """1-based ordinal shared by all entries from the same chip. Group by ``citationPillId`` to reconstruct the visible
    chip; the per-source ``label`` differs across entries within a chip."""

    url: str
    """Direct URL of the cited source."""

    domain: str
    """Host extracted from ``url``, for grouping and display."""

    description: Optional[str] = UNSET
    """Source description from the sources rail when Google ships one. Omitted when the source carries no snippet."""

    position: Optional[int] = UNSET
    """1-based position of this source in the sibling ``result.sources`` array. Omitted when the cited source isn't in
    ``result.sources``."""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class CitationPill8Dict(TypedDict):
    label: str
    citation_pill_id: int
    url: str
    domain: str
    description: NotRequired[str]
    position: NotRequired[int]
    redirect_link: NotRequired[str]
