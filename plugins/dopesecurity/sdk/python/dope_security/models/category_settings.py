from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_exception import CategoryException, CategoryExceptionDict
from .enums.restriction2 import Restriction2OrStr


class CategorySettings(SdkBaseModel):
    """Settings for a dope category"""

    restriction: Restriction2OrStr
    """The action applied when the category is matched"""

    page: Optional[str] = UNSET
    """Optional block/warning page identifier"""

    description: Optional[str] = UNSET
    """Category description"""

    exceptions: Optional[dict[str, CategoryException]] = UNSET
    """Per-entity overrides keyed by entity identifier"""


class CategorySettingsDict(TypedDict):
    restriction: Restriction2OrStr
    page: NotRequired[str]
    description: NotRequired[str]
    exceptions: NotRequired[dict[str, CategoryExceptionDict]]
