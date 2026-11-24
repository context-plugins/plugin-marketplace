from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomFieldType(str, Enum):
    """The type of value being stored in the custom field."""

    STRING = "string"
    INTEGER = "integer"
    BOOLEAN = "boolean"
    DATE = "date"
    DATETIME = "datetime"
    LIST = "list"
    DOUBLE = "double"

    __str__ = str.__str__


CustomFieldTypeOrStr: TypeAlias = Annotated[CustomFieldType | str, open_enum_validator(CustomFieldType)]
