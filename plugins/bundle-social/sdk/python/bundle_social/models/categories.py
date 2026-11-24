from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .additional_category import AdditionalCategory, AdditionalCategoryDict
from .primary_category import PrimaryCategory, PrimaryCategoryDict


class Categories(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    primary_category: Optional[PrimaryCategory] = Field(default=UNSET, alias="primaryCategory")
    additional_categories: Optional[list[AdditionalCategory]] = Field(default=UNSET, alias="additionalCategories")


class CategoriesDict(TypedDict):
    primary_category: NotRequired[PrimaryCategoryDict]
    additional_categories: NotRequired[list[AdditionalCategoryDict]]
