from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3DevCycleManagementMetricAssociationsApi(str, Enum):
    """The type of Variable. Must be one of [String | Boolean | Number | JSON]"""

    STRING = "String"
    BOOLEAN = "Boolean"
    NUMBER = "Number"
    JSON = "JSON"

    __str__ = str.__str__


Type3DevCycleManagementMetricAssociationsApiOrStr: TypeAlias = Annotated[
    Type3DevCycleManagementMetricAssociationsApi | str,
    open_enum_validator(Type3DevCycleManagementMetricAssociationsApi),
]
