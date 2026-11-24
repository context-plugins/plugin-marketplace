from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SupportedEvent(str, Enum):
    SUPPORTED_EVENT_UNSPECIFIED = "SUPPORTED_EVENT_UNSPECIFIED"
    REQUEST_HEADERS = "REQUEST_HEADERS"
    REQUEST_BODY = "REQUEST_BODY"
    RESPONSE_HEADERS = "RESPONSE_HEADERS"
    RESPONSE_BODY = "RESPONSE_BODY"
    REQUEST_TRAILERS = "REQUEST_TRAILERS"
    RESPONSE_TRAILERS = "RESPONSE_TRAILERS"

    __str__ = str.__str__


SupportedEventOrStr: TypeAlias = Annotated[SupportedEvent | str, open_enum_validator(SupportedEvent)]
