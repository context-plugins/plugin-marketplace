from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.categories import Categories, CategoriesDict
from .unions.custom_categories import CustomCategories, CustomCategoriesDict


class DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories(SdkBaseModel):
    categories: Optional[Categories] = UNSET
    """Restriction updates keyed by category name, or BaseInheritance to reset to base."""

    custom_categories: Optional[CustomCategories] = Field(default=UNSET, alias="customCategories")
    """Restriction updates keyed by custom category name, or BaseInheritance to reset to base."""


class DataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesDict(TypedDict):
    categories: NotRequired[CategoriesDict]
    custom_categories: NotRequired[CustomCategoriesDict]
