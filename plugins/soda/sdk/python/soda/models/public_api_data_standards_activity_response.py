from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_activity_content_dto import DataStandardActivityContentDto, DataStandardActivityContentDtoDict


class PublicApiDataStandardsActivityResponse(SdkBaseModel):
    activity: Optional[DataStandardActivityContentDto] = UNSET


class PublicApiDataStandardsActivityResponseDict(TypedDict):
    activity: NotRequired[DataStandardActivityContentDtoDict]
