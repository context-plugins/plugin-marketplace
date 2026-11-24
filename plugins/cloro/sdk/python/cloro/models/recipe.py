from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Recipe(SdkBaseModel):
    position: float
    """Position within the carousel (1-indexed)"""

    title: str
    """Recipe title as displayed on the SERP"""

    link: str
    """URL of the recipe page"""

    source: Optional[str] = UNSET
    """Name of the site that publishes the recipe"""

    rating: Optional[float] = UNSET
    """Average star rating (0–5)"""

    reviews: Optional[str] = UNSET
    """Review count as displayed by Google (e.g. "7.1K"). Free-form string — not normalized to a number."""

    total_time: Optional[str] = Field(default=UNSET, alias="totalTime")
    """Total time as displayed by Google, in the language of the SERP (e.g. "1 hr 10 min", "15 Min."). Free-form string
    — not normalized to a duration."""

    ingredients: Optional[list[str]] = UNSET
    """The ingredients Google shows on the card. This is a short selection, not the full list of the recipe."""

    thumbnail: Optional[str] = UNSET
    """Recipe image: an image URL or an inline ``data:`` URI"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class RecipeDict(TypedDict):
    position: float
    title: str
    link: str
    source: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    total_time: NotRequired[str]
    ingredients: NotRequired[list[str]]
    thumbnail: NotRequired[str]
    redirect_link: NotRequired[str]
