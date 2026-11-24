from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionOperationsApi(str, Enum):
    REKOGNITION_SERVICE_COPY_PROJECT_VERSION = "RekognitionService.CopyProjectVersion"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionOperationsApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionOperationsApi)
]
