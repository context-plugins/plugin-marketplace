from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class EmailRecord(SdkBaseModel):
    email: Optional[EmailStr] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    validation_status: Optional[str] = Field(default=UNSET, alias="validationStatus")


class EmailRecordDict(TypedDict):
    email: NotRequired[EmailStr]
    type_: NotRequired[TypeOrStr]
    validation_status: NotRequired[str]
