from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ReportsCopyResponse(SdkBaseModel):
    id: UUID
    title: str
    slug: str
    url: str


class ApiV1ReportsCopyResponseDict(TypedDict):
    id: UUID
    title: str
    slug: str
    url: str
