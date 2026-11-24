from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    """Optional. Operation method Note: Even though this field is optional, it is required for CreateApiOperation API
    and we will fail the request if not provided."""

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


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]
