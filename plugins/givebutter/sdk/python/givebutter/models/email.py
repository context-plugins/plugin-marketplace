from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Email(SdkBaseModel):
    value: OptionalNullable[EmailStr] = UNSET
    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    is_primary: Optional[bool] = UNSET


class EmailDict(TypedDict):
    value: NotRequired[EmailStr | None]
    type_: NotRequired[str | None]
    is_primary: NotRequired[bool]
