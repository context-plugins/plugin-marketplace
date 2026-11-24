from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayloadFormat(str, Enum):
    """Required. The desired format of the notification message payloads."""

    PAYLOAD_FORMAT_UNSPECIFIED = "PAYLOAD_FORMAT_UNSPECIFIED"
    NONE = "NONE"
    JSON = "JSON"

    __str__ = str.__str__


PayloadFormatOrStr: TypeAlias = Annotated[PayloadFormat | str, open_enum_validator(PayloadFormat)]
