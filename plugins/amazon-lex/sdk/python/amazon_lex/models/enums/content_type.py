from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentType(str, Enum):
    """Indicates the type of response."""

    CUSTOM_PAYLOAD = "CustomPayload"
    IMAGE_RESPONSE_CARD = "ImageResponseCard"
    PLAIN_TEXT = "PlainText"
    SSML = "SSML"

    __str__ = str.__str__


ContentTypeOrStr: TypeAlias = Annotated[ContentType | str, open_enum_validator(ContentType)]
