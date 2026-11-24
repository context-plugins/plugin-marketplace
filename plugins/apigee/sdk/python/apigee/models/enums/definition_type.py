from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefinitionType(str, Enum):
    """Output only. The definition type of the attribute."""

    DEFINITION_TYPE_UNSPECIFIED = "DEFINITION_TYPE_UNSPECIFIED"
    SYSTEM_DEFINED = "SYSTEM_DEFINED"
    USER_DEFINED = "USER_DEFINED"

    __str__ = str.__str__


DefinitionTypeOrStr: TypeAlias = Annotated[DefinitionType | str, open_enum_validator(DefinitionType)]
