from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Visibility(str, Enum):
    """Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is provided, the
    visibility will be set to GLOBAL by default. This value cannot be changed once the API has been created."""

    GLOBAL = "GLOBAL"
    PRIVATE = "PRIVATE"

    __str__ = str.__str__


VisibilityOrStr: TypeAlias = Annotated[Visibility | str, open_enum_validator(Visibility)]
