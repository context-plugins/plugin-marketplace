from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentType1(str, Enum):
    """The type of the response. The following values are possible: PlainText – A plain text string. CustomPayload – A
    response string that you can customize to include data or metadata for your application. SSML – A string that
    includes Speech Synthesis Markup Language to customize the audio response. ImageResponseCard – An image with buttons
    that the customer can select. See ImageResponseCard for more information."""

    PLAIN_TEXT = "PlainText"
    CUSTOM_PAYLOAD = "CustomPayload"
    SSML = "SSML"
    IMAGE_RESPONSE_CARD = "ImageResponseCard"

    __str__ = str.__str__


ContentType1OrStr: TypeAlias = Annotated[ContentType1 | str, open_enum_validator(ContentType1)]
