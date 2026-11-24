from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    reference_id: Optional[str] = UNSET
    notes: Optional[Any] = UNSET
    active: Optional[bool] = UNSET


class ContactsRequest1Dict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact: NotRequired[str]
    type_: NotRequired[str]
    reference_id: NotRequired[str]
    notes: NotRequired[Any]
    active: NotRequired[bool]
