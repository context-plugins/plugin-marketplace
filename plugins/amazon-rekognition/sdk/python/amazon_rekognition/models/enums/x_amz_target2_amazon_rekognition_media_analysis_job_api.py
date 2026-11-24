from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionMediaAnalysisJobApi(str, Enum):
    REKOGNITION_SERVICE_START_MEDIA_ANALYSIS_JOB = "RekognitionService.StartMediaAnalysisJob"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionMediaAnalysisJobApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionMediaAnalysisJobApi),
]
