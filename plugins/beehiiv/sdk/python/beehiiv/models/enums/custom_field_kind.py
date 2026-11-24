from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomFieldKind(str, Enum):
    """The type of the custom field."""

    STRING = "string"
    INTEGER = "integer"
    NUMBER = "number"
    BOOLEAN = "boolean"
    DATE = "date"
    DATETIME = "datetime"
    LIST = "list"

    __str__ = str.__str__


CustomFieldKindOrStr: TypeAlias = Annotated[CustomFieldKind | str, open_enum_validator(CustomFieldKind)]
