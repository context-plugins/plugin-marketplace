from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessageFormat1(str, Enum):
    """The format of the response message. One of the following values: PlainText - The message contains plain UTF-8
    text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for
    voice output. Composite - The message contains an escaped JSON object containing one or more messages from the
    groups that messages were assigned to when the intent was created."""

    PLAIN_TEXT = "PlainText"
    CUSTOM_PAYLOAD = "CustomPayload"
    SSML = "SSML"
    COMPOSITE = "Composite"

    __str__ = str.__str__


MessageFormat1OrStr: TypeAlias = Annotated[MessageFormat1 | str, open_enum_validator(MessageFormat1)]
