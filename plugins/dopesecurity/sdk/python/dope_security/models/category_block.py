from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .category_settings import CategorySettings, CategorySettingsDict


class CategoryBlock(SdkBaseModel):
    """Wrapper for category data with inheritance flag"""

    inherits_from_base: bool = Field(alias="inheritsFromBase")
    """Whether the categories are inherited from the base policy"""

    restrictions: dict[str, CategorySettings]
    """Category restrictions keyed by category name"""


class CategoryBlockDict(TypedDict):
    inherits_from_base: bool
    restrictions: dict[str, CategorySettingsDict]
