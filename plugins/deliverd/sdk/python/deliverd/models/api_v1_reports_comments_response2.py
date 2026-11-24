from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ReportsCommentsResponse2(SdkBaseModel):
    status: Literal["retracted"] = "retracted"
    thread_id: UUID = Field(alias="threadId")
    thread_retracted: bool = Field(alias="threadRetracted")


class ApiV1ReportsCommentsResponse2Dict(TypedDict):
    status: Literal["retracted"]
    thread_id: UUID
    thread_retracted: bool
