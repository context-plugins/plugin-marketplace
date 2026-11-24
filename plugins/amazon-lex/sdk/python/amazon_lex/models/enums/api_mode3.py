from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiMode3(str, Enum):
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText
    Amazon Lex Runtime API are used."""

    STREAMING = "Streaming"
    NON_STREAMING = "NonStreaming"

    __str__ = str.__str__


ApiMode3OrStr: TypeAlias = Annotated[ApiMode3 | str, open_enum_validator(ApiMode3)]
