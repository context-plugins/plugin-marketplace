from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HttpElementLocation(str, Enum):
    """Required. The location of the API key. The default value is QUERY."""

    HTTP_ELEMENT_LOCATION_UNSPECIFIED = "HTTP_ELEMENT_LOCATION_UNSPECIFIED"
    QUERY = "QUERY"
    HEADER = "HEADER"
    PATH = "PATH"
    BODY = "BODY"
    COOKIE = "COOKIE"

    __str__ = str.__str__


HttpElementLocationOrStr: TypeAlias = Annotated[HttpElementLocation | str, open_enum_validator(HttpElementLocation)]
