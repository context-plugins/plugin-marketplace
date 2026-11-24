from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.clixexternalv1_user_property_type import Clixexternalv1UserPropertyType, Clixexternalv1UserPropertyTypeOrStr


class Clixexternalv1UserProperty(SdkBaseModel):
    name: Optional[str] = UNSET
    type_: Clixexternalv1UserPropertyTypeOrStr = Field(
        default=Clixexternalv1UserPropertyType.USER_PROPERTY_TYPE_STRING, alias="type"
    )
    value: Optional[str] = UNSET


class Clixexternalv1UserPropertyDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[Clixexternalv1UserPropertyTypeOrStr]
    value: NotRequired[str]
