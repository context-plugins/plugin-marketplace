from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TextDiff(SdkBaseModel):
    """Present for text/both runs; null otherwise"""

    added: Optional[list[str]] = UNSET
    removed: Optional[list[str]] = UNSET
    summary: Optional[str] = UNSET


class TextDiffDict(TypedDict):
    added: NotRequired[list[str]]
    removed: NotRequired[list[str]]
    summary: NotRequired[str]
