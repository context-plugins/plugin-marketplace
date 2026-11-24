from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_content_dto import DataStandardContentDto, DataStandardContentDtoDict


class PublicApiUpdateDataStandardStatusResponse(SdkBaseModel):
    data_standard: Optional[DataStandardContentDto] = Field(default=UNSET, alias="dataStandard")


class PublicApiUpdateDataStandardStatusResponseDict(TypedDict):
    data_standard: NotRequired[DataStandardContentDtoDict]
