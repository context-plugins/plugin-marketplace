from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Thread(SdkBaseModel):
    thread_id: str = Field(alias="threadId")
    report_id: str = Field(alias="reportId")
    report_title: str = Field(alias="reportTitle")
    report_slug: str = Field(alias="reportSlug")
    report_owner_id: str | None = Field(alias="reportOwnerId")
    """Who owns the report — filter on it to find your own"""

    quote: str | None
    author: str
    author_type: str = Field(alias="authorType")
    messages: float
    last_activity_at: str = Field(alias="lastActivityAt")


class ThreadDict(TypedDict):
    thread_id: str
    report_id: str
    report_title: str
    report_slug: str
    report_owner_id: str | None
    quote: str | None
    author: str
    author_type: str
    messages: float
    last_activity_at: str
