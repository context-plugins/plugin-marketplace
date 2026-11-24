from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HttpMethod2(str, Enum):
    """The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the
    value is set to HttpMethod the HttpRequest of the task will be ignored at execution time."""

    HTTP_METHOD_UNSPECIFIED = "HTTP_METHOD_UNSPECIFIED"
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"

    __str__ = str.__str__


HttpMethod2OrStr: TypeAlias = Annotated[HttpMethod2 | str, open_enum_validator(HttpMethod2)]
