from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LastChange(SdkBaseModel):
    """The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET /v1/watches and GET
    /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no follow-up call to /:id/runs). Null when
    the watch has never changed."""

    ai_summary: OptionalNullable[str] = Field(default=UNSET, alias="aiSummary")
    """One-sentence "what changed" summary (templated by default; AI-written when a Pro+ watch opted in)"""

    text_diff: OptionalNullable[Any] = Field(default=UNSET, alias="textDiff")
    """Parsed text diff: { added, removed, summary }. Null for a visual-only change"""


class LastChangeDict(TypedDict):
    ai_summary: NotRequired[str | None]
    text_diff: NotRequired[Any | None]
