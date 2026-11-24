from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentType1(str, Enum):
    """Type of the new environment"""

    PRODUCTION = "Production"
    SANDBOX = "Sandbox"

    __str__ = str.__str__


EnvironmentType1OrStr: TypeAlias = Annotated[EnvironmentType1 | str, open_enum_validator(EnvironmentType1)]
