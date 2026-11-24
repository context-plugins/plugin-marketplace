from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8(str, Enum):
    REKOGNITION_SERVICE_DISTRIBUTE_DATASET_ENTRIES = "RekognitionService.DistributeDatasetEntries"

    __str__ = str.__str__


XAmzTarget8OrStr: TypeAlias = Annotated[XAmzTarget8 | str, open_enum_validator(XAmzTarget8)]
