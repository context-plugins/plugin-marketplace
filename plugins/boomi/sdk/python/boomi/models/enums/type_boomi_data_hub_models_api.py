from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBoomiDataHubModelsApi(str, Enum):
    """Data type of the field."""

    STRING = "STRING"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    BOOLEAN = "BOOLEAN"
    DATE = "DATE"
    DATETIME = "DATETIME"
    REFERENCE = "REFERENCE"

    __str__ = str.__str__


TypeBoomiDataHubModelsApiOrStr: TypeAlias = Annotated[
    TypeBoomiDataHubModelsApi | str, open_enum_validator(TypeBoomiDataHubModelsApi)
]
