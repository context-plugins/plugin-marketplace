from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentType(str, Enum):
    """Type of environment to create"""

    PRODUCTION = "Production"
    SANDBOX = "Sandbox"

    __str__ = str.__str__


EnvironmentTypeOrStr: TypeAlias = Annotated[EnvironmentType | str, open_enum_validator(EnvironmentType)]
