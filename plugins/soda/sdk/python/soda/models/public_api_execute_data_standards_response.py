from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiExecuteDataStandardsResponse(SdkBaseModel):
    data_standard_ids: Optional[list[str]] = Field(default=UNSET, alias="dataStandardIds")
    scan_id: Optional[str] = Field(default=UNSET, alias="scanId")


class PublicApiExecuteDataStandardsResponseDict(TypedDict):
    data_standard_ids: NotRequired[list[str]]
    scan_id: NotRequired[str]
