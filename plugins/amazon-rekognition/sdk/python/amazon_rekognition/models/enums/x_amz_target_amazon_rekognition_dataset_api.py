from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionDatasetApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_DATASET = "RekognitionService.CreateDataset"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionDatasetApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionDatasetApi | str, open_enum_validator(XAmzTargetAmazonRekognitionDatasetApi)
]
