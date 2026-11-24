from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequestDirection(str, Enum):
    """The direction of the request. Defaults to ``asc``."""

    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


RequestDirectionOrStr: TypeAlias = Annotated[RequestDirection | str, open_enum_validator(RequestDirection)]
