from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ReportsCommentsResponse1(SdkBaseModel):
    thread_id: UUID = Field(alias="threadId")
    comment_id: UUID = Field(alias="commentId")
    anchored: bool


class ApiV1ReportsCommentsResponse1Dict(TypedDict):
    thread_id: UUID
    comment_id: UUID
    anchored: bool
