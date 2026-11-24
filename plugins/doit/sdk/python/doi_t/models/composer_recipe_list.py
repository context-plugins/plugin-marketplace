from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .composer_recipe import ComposerRecipe, ComposerRecipeDict


class ComposerRecipeList(SdkBaseModel):
    """One page of Composer recipes."""

    items: list[ComposerRecipe]
    """Recipes on this page."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Token for the next page. Absent on the last page."""

    row_count: int = Field(alias="rowCount")
    """Total number of recipes across all pages."""


class ComposerRecipeListDict(TypedDict):
    items: list[ComposerRecipeDict]
    page_token: NotRequired[str]
    row_count: int
