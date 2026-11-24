from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_exception import CategoryException, CategoryExceptionDict
from .enums.restriction import RestrictionOrStr


class CustomCategorySettings(SdkBaseModel):
    """Settings for a custom category"""

    restriction: RestrictionOrStr
    """The action applied when the custom category is matched"""

    page: Optional[str] = UNSET
    """Optional block/warning page identifier"""

    exceptions: Optional[dict[str, CategoryException]] = UNSET
    """Per-entity overrides keyed by entity identifier"""


class CustomCategorySettingsDict(TypedDict):
    restriction: RestrictionOrStr
    page: NotRequired[str]
    exceptions: NotRequired[dict[str, CategoryExceptionDict]]
