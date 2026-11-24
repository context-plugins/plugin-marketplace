from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SchemaVersion(str, Enum):
    ATIF_V1_0 = "ATIF-v1.0"
    ATIF_V1_1 = "ATIF-v1.1"
    ATIF_V1_2 = "ATIF-v1.2"
    ATIF_V1_3 = "ATIF-v1.3"
    ATIF_V1_4 = "ATIF-v1.4"
    ATIF_V1_5 = "ATIF-v1.5"
    ATIF_V1_6 = "ATIF-v1.6"
    ATIF_V1_7 = "ATIF-v1.7"
    ATIF_V1_8 = "ATIF-v1.8"

    __str__ = str.__str__


SchemaVersionOrStr: TypeAlias = Annotated[SchemaVersion | str, open_enum_validator(SchemaVersion)]
