from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restriction5 import Restriction5OrStr


class CategoryExceptionUpdate(SdkBaseModel):
    """Exception settings used in write operations"""

    restriction: Restriction5OrStr
    """The action applied for this user or group"""

    page: Optional[str] = UNSET
    """Optional page identifier. Use with BLOCK and WARNING restrictions."""


class CategoryExceptionUpdateDict(TypedDict):
    restriction: Restriction5OrStr
    page: NotRequired[str]
