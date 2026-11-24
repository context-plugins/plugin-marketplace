from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Contact(SdkBaseModel):
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class ContactDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact: NotRequired[str]
    type_: NotRequired[str]
