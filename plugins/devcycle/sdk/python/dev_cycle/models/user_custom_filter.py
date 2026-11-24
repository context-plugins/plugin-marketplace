from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.comparator4 import Comparator4OrStr
from .enums.data_key_type import DataKeyTypeOrStr


class UserCustomFilter(SdkBaseModel):
    comparator: Comparator4OrStr
    """Comparator to use"""

    data_key: str = Field(alias="dataKey")
    """Data Key used for custom data"""

    data_key_type: DataKeyTypeOrStr = Field(alias="dataKeyType")
    """Data Key Type used for custom data"""

    values: Optional[Any] = UNSET
    """An array of values is required for all filters except when the comparator is 'exist' or '!exist'"""

    type_: Literal["user"] = Field(default="user", alias="type")
    """Filter type of this audience"""

    sub_type: Literal["customData"] = Field(default="customData", alias="subType")
    """Sub type of this filter"""


class UserCustomFilterDict(TypedDict):
    comparator: Comparator4OrStr
    data_key: str
    data_key_type: DataKeyTypeOrStr
    values: NotRequired[Any]
    type_: Literal["user"]
    sub_type: Literal["customData"]
