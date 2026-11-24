from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class ActivitiesSignaturesUser(SdkBaseModel):
    email: Optional[EmailStr] = UNSET
    first_name: Optional[str] = UNSET
    last_name: Optional[str] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    mobile: Optional[str] = UNSET


class ActivitiesSignaturesUserDict(TypedDict):
    email: NotRequired[EmailStr]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    mobile: NotRequired[str]
