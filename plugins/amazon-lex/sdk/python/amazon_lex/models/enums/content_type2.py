from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentType2(str, Enum):
    """The content type of the message string."""

    PLAIN_TEXT = "PlainText"
    SSML = "SSML"
    CUSTOM_PAYLOAD = "CustomPayload"

    __str__ = str.__str__


ContentType2OrStr: TypeAlias = Annotated[ContentType2 | str, open_enum_validator(ContentType2)]
