from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Product1(SdkBaseModel):
    """Product identifier information"""

    id: Optional[str] = UNSET
    """Unique product ID"""

    group_id: Optional[str] = Field(default=UNSET, alias="groupId")
    """Product group ID"""

    brand_group_id: Optional[str] = Field(default=UNSET, alias="brandGroupId")
    """Brand group ID (optional)"""


class Product1Dict(TypedDict):
    id: NotRequired[str]
    group_id: NotRequired[str]
    brand_group_id: NotRequired[str]
