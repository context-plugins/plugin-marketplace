from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentModel(str, Enum):
    DEVELOPMENT = "development"
    PRODUCTION = "production"

    __str__ = str.__str__


EnvironmentModelOrStr: TypeAlias = Annotated[EnvironmentModel | str, open_enum_validator(EnvironmentModel)]
