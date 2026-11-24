from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restriction3 import Restriction3OrStr


class CategoryRestrictionUpdate(SdkBaseModel):
    """Category restriction settings used in write operations"""

    restriction: Restriction3OrStr
    """Action applied when the category is matched"""

    page: Optional[str] = UNSET
    """Optional page identifier. Use with BLOCK and WARNING restrictions."""


class CategoryRestrictionUpdateDict(TypedDict):
    restriction: Restriction3OrStr
    page: NotRequired[str]
