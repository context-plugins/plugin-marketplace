from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionMediaAnalysisJobApi(str, Enum):
    REKOGNITION_SERVICE_LIST_MEDIA_ANALYSIS_JOBS = "RekognitionService.ListMediaAnalysisJobs"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionMediaAnalysisJobApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionMediaAnalysisJobApi),
]
