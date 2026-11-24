from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class ViewSchema(SdkBaseModel):
    """The schema definition of a view within a table."""

    id: str
    """The unique identifier of the view (starts with 'viw')."""

    name: str
    """The name of the view."""

    type_: Type1OrStr = Field(alias="type")
    """The type of the view."""

    personal_for_user_id: Optional[str] = Field(default=UNSET, alias="personalForUserId")
    """If set, this is a personal view only visible to the specified user."""

    visible_field_ids: Optional[list[str]] = Field(default=UNSET, alias="visibleFieldIds")
    """The IDs of fields visible in this view. Only included if visibleFieldIds is requested via the include
    parameter."""


class ViewSchemaDict(TypedDict):
    id: str
    name: str
    type_: Type1OrStr
    personal_for_user_id: NotRequired[str]
    visible_field_ids: NotRequired[list[str]]
