from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Phone(SdkBaseModel):
    value: OptionalNullable[str] = UNSET
    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    is_primary: Optional[bool] = UNSET


class PhoneDict(TypedDict):
    value: NotRequired[str | None]
    type_: NotRequired[str | None]
    is_primary: NotRequired[bool]
