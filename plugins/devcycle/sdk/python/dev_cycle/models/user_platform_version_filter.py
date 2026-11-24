from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.comparator2 import Comparator2OrStr


class UserPlatformVersionFilter(SdkBaseModel):
    comparator: Comparator2OrStr
    """Comparator to use"""

    values: Optional[list[str]] = UNSET
    """An array of values is required for all filters except when the comparator is 'exist' or '!exist'"""

    type_: Literal["user"] = Field(default="user", alias="type")
    """Filter type of this audience"""

    sub_type: Literal["appVersion"] = Field(default="appVersion", alias="subType")
    """Sub type of this filter"""


class UserPlatformVersionFilterDict(TypedDict):
    comparator: Comparator2OrStr
    values: NotRequired[list[str]]
    type_: Literal["user"]
    sub_type: Literal["appVersion"]
