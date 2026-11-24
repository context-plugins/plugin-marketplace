from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_result import ResourceResult, ResourceResultDict


class ResourceResultsResponse(SdkBaseModel):
    resource_results: list[ResourceResult] = Field(alias="resourceResults")
    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    row_count: int = Field(alias="rowCount")


class ResourceResultsResponseDict(TypedDict):
    resource_results: list[ResourceResultDict]
    page_token: NotRequired[str]
    row_count: int
