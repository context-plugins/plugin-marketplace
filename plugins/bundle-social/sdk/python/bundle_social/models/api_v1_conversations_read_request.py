from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ApiV1ConversationsReadRequest(SdkBaseModel):
    read_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="readAt")


class ApiV1ConversationsReadRequestDict(TypedDict):
    read_at: NotRequired[RFC3339DateTime | None]
