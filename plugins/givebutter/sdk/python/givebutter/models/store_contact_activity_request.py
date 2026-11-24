from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type_givebutter_api_documentation_contact_activities_api import (
    TypeGivebutterApiDocumentationContactActivitiesApiOrStr,
)


class StoreContactActivityRequest(SdkBaseModel):
    type_: TypeGivebutterApiDocumentationContactActivitiesApiOrStr = Field(alias="type")
    note: OptionalNullable[str] = UNSET
    subject: OptionalNullable[str] = UNSET
    occurred_at: OptionalNullable[RFC3339DateTime] = UNSET
    timezone: OptionalNullable[str] = UNSET


class StoreContactActivityRequestDict(TypedDict):
    type_: TypeGivebutterApiDocumentationContactActivitiesApiOrStr
    note: NotRequired[str | None]
    subject: NotRequired[str | None]
    occurred_at: NotRequired[RFC3339DateTime | None]
    timezone: NotRequired[str | None]
