from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .composer_recipe_result import ComposerRecipeResult, ComposerRecipeResultDict


class ComposerRecipeResultList(SdkBaseModel):
    """One page of a Composer recipe's results."""

    items: list[ComposerRecipeResult]
    """Results on this page."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Token for the next page. Absent on the last page."""

    row_count: int = Field(alias="rowCount")
    """Total number of results across all pages."""


class ComposerRecipeResultListDict(TypedDict):
    items: list[ComposerRecipeResultDict]
    page_token: NotRequired[str]
    row_count: int
