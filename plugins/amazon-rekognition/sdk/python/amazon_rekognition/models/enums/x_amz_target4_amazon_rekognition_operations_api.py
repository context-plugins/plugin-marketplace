from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonRekognitionOperationsApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_LABELS = "RekognitionService.DetectLabels"

    __str__ = str.__str__


XAmzTarget4AmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonRekognitionOperationsApi | str, open_enum_validator(XAmzTarget4AmazonRekognitionOperationsApi)
]
