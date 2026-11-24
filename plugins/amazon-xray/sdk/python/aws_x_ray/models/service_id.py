from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServiceId(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    names: Optional[list[str]] = Field(default=UNSET, alias="Names")
    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    type_: Optional[str] = Field(default=UNSET, alias="Type")


class ServiceIdDict(TypedDict):
    name: NotRequired[str]
    names: NotRequired[list[str]]
    account_id: NotRequired[str]
    type_: NotRequired[str]
