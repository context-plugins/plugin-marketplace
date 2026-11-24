from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.object import ObjectOrStr


class Activity(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[ObjectOrStr] = Field(default=UNSET, alias="object")
    type_: Optional[str] = Field(default=UNSET, alias="type")
    body: OptionalNullable[str] = UNSET
    contact_id: OptionalNullable[str] = UNSET
    deal_id: OptionalNullable[str] = UNSET
    occurred_at: Optional[str] = UNSET
    custom_fields: Optional[Any] = UNSET
    version: Optional[int] = UNSET
    mode: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    deleted: Optional[bool] = UNSET


class ActivityDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[ObjectOrStr]
    type_: NotRequired[str]
    body: NotRequired[str | None]
    contact_id: NotRequired[str | None]
    deal_id: NotRequired[str | None]
    occurred_at: NotRequired[str]
    custom_fields: NotRequired[Any]
    version: NotRequired[int]
    mode: NotRequired[str]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
    deleted: NotRequired[bool]
