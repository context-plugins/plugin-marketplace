from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionProjectVersionApi(str, Enum):
    REKOGNITION_SERVICE_DESCRIBE_PROJECT_VERSIONS = "RekognitionService.DescribeProjectVersions"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionProjectVersionApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionProjectVersionApi),
]
