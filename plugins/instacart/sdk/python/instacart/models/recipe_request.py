from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_creator_credit_info import ContentCreatorCreditInfo, ContentCreatorCreditInfoDict
from .ingredient import Ingredient, IngredientDict


class RecipeRequest(SdkBaseModel):
    title: str
    """The title of the recipe displayed on the recipe page."""

    image_url: Optional[str] = UNSET
    """URL of an image to display for the recipe."""

    author: Optional[str] = UNSET
    """The name of the recipe author."""

    servings: Optional[int] = UNSET
    """The number of servings the recipe makes."""

    cooking_time: Optional[str] = UNSET
    """The estimated cooking time for the recipe."""

    external_reference_id: Optional[str] = UNSET
    """An external identifier for the recipe from the partner system."""

    content_creator_credit_info: Optional[ContentCreatorCreditInfo] = UNSET
    """Information for crediting the content creator on the recipe page."""

    expires_in: Optional[int] = UNSET
    """The number of seconds until the generated recipe link expires."""

    instructions: Optional[list[str]] = UNSET
    """Step-by-step cooking instructions for the recipe."""

    ingredients: list[Ingredient]
    """The list of ingredients required for the recipe."""


class RecipeRequestDict(TypedDict):
    title: str
    image_url: NotRequired[str]
    author: NotRequired[str]
    servings: NotRequired[int]
    cooking_time: NotRequired[str]
    external_reference_id: NotRequired[str]
    content_creator_credit_info: NotRequired[ContentCreatorCreditInfoDict]
    expires_in: NotRequired[int]
    instructions: NotRequired[list[str]]
    ingredients: list[IngredientDict]
