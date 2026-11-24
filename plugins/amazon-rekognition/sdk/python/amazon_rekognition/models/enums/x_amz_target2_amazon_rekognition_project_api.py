from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionProjectApi(str, Enum):
    REKOGNITION_SERVICE_DESCRIBE_PROJECTS = "RekognitionService.DescribeProjects"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionProjectApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionProjectApi)
]
