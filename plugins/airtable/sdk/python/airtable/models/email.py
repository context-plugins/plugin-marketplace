from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Email(SdkBaseModel):
    value: Optional[EmailStr] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    primary: Optional[bool] = UNSET


class EmailDict(TypedDict):
    value: NotRequired[EmailStr]
    type_: NotRequired[str]
    primary: NotRequired[bool]
