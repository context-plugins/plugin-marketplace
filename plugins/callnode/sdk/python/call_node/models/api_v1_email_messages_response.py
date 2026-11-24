from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .email_message import EmailMessage, EmailMessageDict


class ApiV1EmailMessagesResponse(SdkBaseModel):
    data: Optional[list[EmailMessage]] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")


class ApiV1EmailMessagesResponseDict(TypedDict):
    data: NotRequired[list[EmailMessageDict]]
    next_cursor: NotRequired[str | None]
