from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .project_data_point import ProjectDataPoint, ProjectDataPointDict


class ResultsWithProjectData(SdkBaseModel):
    evaluations: list[ProjectDataPoint]


class ResultsWithProjectDataDict(TypedDict):
    evaluations: list[ProjectDataPointDict]
