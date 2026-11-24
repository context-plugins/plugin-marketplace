from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .results_with_project_data import ResultsWithProjectData, ResultsWithProjectDataDict


class ResultProjectEvaluationsByHourDto(SdkBaseModel):
    result: ResultsWithProjectData
    cached: bool
    """Whether this result came from a cache or a live result"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """Date which these results are up-to-date with"""


class ResultProjectEvaluationsByHourDtoDict(TypedDict):
    result: ResultsWithProjectDataDict
    cached: bool
    updated_at: RFC3339DateTime
