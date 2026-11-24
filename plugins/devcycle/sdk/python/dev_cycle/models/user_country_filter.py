from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.comparator import ComparatorOrStr


class UserCountryFilter(SdkBaseModel):
    sub_type: Literal["country"] = Field(default="country", alias="subType")
    """Sub type of this filter"""

    comparator: ComparatorOrStr
    """Comparator to use"""

    values: Optional[list[str]] = UNSET
    """An array of values is required for all filters except when the comparator is 'exist' or '!exist'"""

    type_: Literal["user"] = Field(default="user", alias="type")
    """Filter type of this audience"""


class UserCountryFilterDict(TypedDict):
    sub_type: Literal["country"]
    comparator: ComparatorOrStr
    values: NotRequired[list[str]]
    type_: Literal["user"]
