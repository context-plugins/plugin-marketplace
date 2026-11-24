from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaCoreAnalyticsApi(SdkBaseModel):
    total_records: Optional[int] = Field(default=UNSET, alias="totalRecords")
    page: Optional[int] = UNSET
    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")


class MetaCoreAnalyticsApiDict(TypedDict):
    total_records: NotRequired[int]
    page: NotRequired[int]
    page_size: NotRequired[int]
