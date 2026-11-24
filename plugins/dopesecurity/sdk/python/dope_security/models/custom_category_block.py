from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_category_settings import CustomCategorySettings, CustomCategorySettingsDict


class CustomCategoryBlock(SdkBaseModel):
    """Wrapper for custom category data with inheritance flag"""

    inherits_from_base: bool = Field(alias="inheritsFromBase")
    """Whether the custom categories are inherited from the base policy"""

    restrictions: dict[str, CustomCategorySettings]
    """Custom category restrictions keyed by custom category name"""


class CustomCategoryBlockDict(TypedDict):
    inherits_from_base: bool
    restrictions: dict[str, CustomCategorySettingsDict]
