from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionDatasetApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_DATASET = "RekognitionService.DeleteDataset"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionDatasetApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionDatasetApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionDatasetApi)
]
