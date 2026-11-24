from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .definition import Definition, DefinitionDict
from .enums.status2 import Status2OrStr


class PublishedVersion(SdkBaseModel):
    id: str
    flow_id: str = Field(alias="flowId")
    version: float
    status: Status2OrStr
    definition: Definition
    published_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    published_by_user_id: OptionalNullable[str] = Field(default=UNSET, alias="publishedByUserId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")


class PublishedVersionDict(TypedDict):
    id: str
    flow_id: str
    version: float
    status: Status2OrStr
    definition: DefinitionDict
    published_at: NotRequired[RFC3339DateTime | None]
    published_by_user_id: NotRequired[str | None]
    created_at: RFC3339DateTime | None
