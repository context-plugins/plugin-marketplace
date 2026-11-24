from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restriction4 import Restriction4OrStr


class CustomCategoryRestrictionUpdate(SdkBaseModel):
    """Custom category restriction settings used in write operations"""

    restriction: Restriction4OrStr
    """Custom categories can be ignored, in addition to regular restrictions"""

    page: Optional[str] = UNSET
    """Optional page identifier. Use with BLOCK and WARNING restrictions."""


class CustomCategoryRestrictionUpdateDict(TypedDict):
    restriction: Restriction4OrStr
    page: NotRequired[str]
