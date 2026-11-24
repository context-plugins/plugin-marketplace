from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonRekognitionProjectVersionApi(str, Enum):
    REKOGNITION_SERVICE_STOP_PROJECT_VERSION = "RekognitionService.StopProjectVersion"

    __str__ = str.__str__


XAmzTarget4AmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonRekognitionProjectVersionApi | str,
    open_enum_validator(XAmzTarget4AmazonRekognitionProjectVersionApi),
]
