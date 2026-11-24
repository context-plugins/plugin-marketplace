from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HttpMethodModel(str, Enum):
    """The HTTP method to use for the request. The default is POST."""

    HTTP_METHOD_UNSPECIFIED = "HTTP_METHOD_UNSPECIFIED"
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"

    __str__ = str.__str__


HttpMethodModelOrStr: TypeAlias = Annotated[HttpMethodModel | str, open_enum_validator(HttpMethodModel)]
