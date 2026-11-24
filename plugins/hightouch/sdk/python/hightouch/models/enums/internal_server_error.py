from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InternalServerError(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal Server Error"

    __str__ = str.__str__


InternalServerErrorOrStr: TypeAlias = Annotated[InternalServerError | str, open_enum_validator(InternalServerError)]
