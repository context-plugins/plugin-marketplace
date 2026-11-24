from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsCommentsRequest(SdkBaseModel):
    body: str
    quote: Optional[str] = UNSET
    thread_id: Optional[UUID] = Field(default=UNSET, alias="threadId")


class ApiV1ReportsCommentsRequestDict(TypedDict):
    body: str
    quote: NotRequired[str]
    thread_id: NotRequired[UUID]
