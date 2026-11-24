from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionMediaAnalysisJobApi(str, Enum):
    REKOGNITION_SERVICE_GET_MEDIA_ANALYSIS_JOB = "RekognitionService.GetMediaAnalysisJob"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionMediaAnalysisJobApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionMediaAnalysisJobApi),
]
