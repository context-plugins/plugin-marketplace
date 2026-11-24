from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .category_block import CategoryBlock, CategoryBlockDict
from .custom_category_block import CustomCategoryBlock, CustomCategoryBlockDict


class Data1FlightdeckDopeSecurityPublicApiSpecification(SdkBaseModel):
    categories: CategoryBlock
    """Wrapper for category data with inheritance flag"""

    custom_categories: CustomCategoryBlock = Field(alias="customCategories")
    """Wrapper for custom category data with inheritance flag"""


class Data1FlightdeckDopeSecurityPublicApiSpecificationDict(TypedDict):
    categories: CategoryBlockDict
    custom_categories: CustomCategoryBlockDict
