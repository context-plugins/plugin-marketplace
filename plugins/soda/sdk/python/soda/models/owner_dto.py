from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OwnerDto(SdkBaseModel):
    email: Optional[str] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")


class OwnerDtoDict(TypedDict):
    email: NotRequired[str]
    first_name: NotRequired[str]
    full_name: NotRequired[str]
    last_name: NotRequired[str]
