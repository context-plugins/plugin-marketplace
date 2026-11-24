from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class V3PhoneNumber(SdkBaseModel):
    number: Optional[str] = UNSET
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    do_not_call: Optional[bool] = Field(default=UNSET, alias="doNotCall")
    update_date: Optional[Date] = Field(default=UNSET, alias="updateDate")


class V3PhoneNumberDict(TypedDict):
    number: NotRequired[str]
    type_: NotRequired[Type1OrStr]
    do_not_call: NotRequired[bool]
    update_date: NotRequired[Date]
