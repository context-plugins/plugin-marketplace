from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CategoryHolder(SdkBaseModel):
    """Google Content Categories most strongly associated with the story."""

    name: OptionalNullable[str] = UNSET
    """Content category assigned to the article."""


class CategoryHolderDict(TypedDict):
    name: NotRequired[str | None]
