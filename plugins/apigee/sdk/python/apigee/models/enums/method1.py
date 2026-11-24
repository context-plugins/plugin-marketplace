from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method1(str, Enum):
    """Required. HTTP method of the operation within the referenced spec. (GET / PUT / POST / DELETE / OPTIONS / HEAD /
    PATCH / TRACE)."""

    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    GET = "GET"
    PUT = "PUT"
    POST = "POST"
    DELETE = "DELETE"
    OPTIONS = "OPTIONS"
    HEAD = "HEAD"
    PATCH = "PATCH"
    TRACE = "TRACE"

    __str__ = str.__str__


Method1OrStr: TypeAlias = Annotated[Method1 | str, open_enum_validator(Method1)]
