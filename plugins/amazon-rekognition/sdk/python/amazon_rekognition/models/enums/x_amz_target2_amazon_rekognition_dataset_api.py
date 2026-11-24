from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionDatasetApi(str, Enum):
    REKOGNITION_SERVICE_DESCRIBE_DATASET = "RekognitionService.DescribeDataset"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionDatasetApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionDatasetApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionDatasetApi)
]
