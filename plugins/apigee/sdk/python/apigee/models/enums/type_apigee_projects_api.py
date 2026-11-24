from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeApigeeProjectsApi(str, Enum):
    """Output only. The type of the definition."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SCHEMA = "SCHEMA"

    __str__ = str.__str__


TypeApigeeProjectsApiOrStr: TypeAlias = Annotated[
    TypeApigeeProjectsApi | str, open_enum_validator(TypeApigeeProjectsApi)
]
