from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    """HTTP method of the operation"""

    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"

    __str__ = str.__str__


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]
