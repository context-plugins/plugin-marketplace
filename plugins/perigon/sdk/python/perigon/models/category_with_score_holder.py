from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CategoryWithScoreHolder(SdkBaseModel):
    """Google Content Categories assigned to the article with confidence scores."""

    name: OptionalNullable[str] = UNSET
    """Full taxonomy category path."""

    score: OptionalNullable[float] = UNSET
    """Confidence score for the category assignment."""


class CategoryWithScoreHolderDict(TypedDict):
    name: NotRequired[str | None]
    score: NotRequired[float | None]
