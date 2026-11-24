from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataClassification(str, Enum):
    PUBLIC = "public"
    INTERNAL = "internal"
    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"

    __str__ = str.__str__


DataClassificationOrStr: TypeAlias = Annotated[DataClassification | str, open_enum_validator(DataClassification)]
