from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class FormSummary(SdkBaseModel):
    id: str
    slug: str
    name: str
    status: StatusOrStr
    created_at: RFC3339DateTime = Field(alias="createdAt")
    response_count: int = Field(alias="responseCount")


class FormSummaryDict(TypedDict):
    id: str
    slug: str
    name: str
    status: StatusOrStr
    created_at: RFC3339DateTime
    response_count: int
