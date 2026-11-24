from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessageFormat(str, Enum):
    """PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format for the client.
    SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object
    containing one or more messages. For more information, see Message Groups."""

    PLAIN_TEXT = "PlainText"
    CUSTOM_PAYLOAD = "CustomPayload"
    SSML = "SSML"
    COMPOSITE = "Composite"

    __str__ = str.__str__


MessageFormatOrStr: TypeAlias = Annotated[MessageFormat | str, open_enum_validator(MessageFormat)]
