from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Citation(SdkBaseModel):
    """A citation for a task output."""

    title: Optional[str] = UNSET
    """Title of the citation."""

    url: str
    """URL of the citation."""

    excerpts: Optional[list[str]] = UNSET
    """Excerpts from the citation supporting the output. Only certain processors provide excerpts."""


class CitationDict(TypedDict):
    title: NotRequired[str]
    url: str
    excerpts: NotRequired[list[str]]
