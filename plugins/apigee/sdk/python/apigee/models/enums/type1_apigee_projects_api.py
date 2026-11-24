from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1ApigeeProjectsApi(str, Enum):
    """Output only. The source type."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    APIGEE_X = "APIGEE_X"

    __str__ = str.__str__


Type1ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    Type1ApigeeProjectsApi | str, open_enum_validator(Type1ApigeeProjectsApi)
]
