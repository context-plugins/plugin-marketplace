from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .golden_record import GoldenRecord, GoldenRecordDict


class RepositoriesUniversesRecordsResponse(SdkBaseModel):
    records: Optional[list[GoldenRecord]] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token for retrieving the next page of results."""


class RepositoriesUniversesRecordsResponseDict(TypedDict):
    records: NotRequired[list[GoldenRecordDict]]
    next_page_token: NotRequired[str]
