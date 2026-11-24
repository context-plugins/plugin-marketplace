from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_standard_check_results_dto import DataStandardCheckResultsDto, DataStandardCheckResultsDtoDict


class DataStandardActivityContentDto(SdkBaseModel):
    active_count: int = Field(alias="activeCount")
    check_results: DataStandardCheckResultsDto = Field(alias="checkResults")
    dataset_count: int = Field(alias="datasetCount")
    total_count: int = Field(alias="totalCount")


class DataStandardActivityContentDtoDict(TypedDict):
    active_count: int
    check_results: DataStandardCheckResultsDtoDict
    dataset_count: int
    total_count: int
