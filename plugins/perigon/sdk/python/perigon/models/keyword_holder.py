from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class KeywordHolder(SdkBaseModel):
    """Keywords extracted from the article with their relevance weights."""

    name: OptionalNullable[str] = UNSET
    """Keyword extracted from the article."""

    weight: OptionalNullable[float] = UNSET
    """Relative relevance weight of the keyword."""


class KeywordHolderDict(TypedDict):
    name: NotRequired[str | None]
    weight: NotRequired[float | None]
