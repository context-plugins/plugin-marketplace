from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributeType(str, Enum):
    """The data type of the field. For a related time series dataset, other than date, item_id, and forecast dimensions
    attributes, all attributes should be of numerical type (integer/float)."""

    STRING = "string"
    INTEGER = "integer"
    FLOAT = "float"
    TIMESTAMP = "timestamp"
    GEOLOCATION = "geolocation"

    __str__ = str.__str__


AttributeTypeOrStr: TypeAlias = Annotated[AttributeType | str, open_enum_validator(AttributeType)]
