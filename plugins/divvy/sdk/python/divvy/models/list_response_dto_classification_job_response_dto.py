from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_job_response_dto import ClassificationJobResponseDto, ClassificationJobResponseDtoDict


class ListResponseDtoClassificationJobResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[ClassificationJobResponseDto]] = UNSET


class ListResponseDtoClassificationJobResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[ClassificationJobResponseDtoDict]]
