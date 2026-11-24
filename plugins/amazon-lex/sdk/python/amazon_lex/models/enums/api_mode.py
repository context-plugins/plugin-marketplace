from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiMode(str, Enum):
    """Indicates whether we use streaming or non-streaming APIs are used for the test set execution. For streaming,
    StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText
    Amazon Lex Runtime API is used."""

    STREAMING = "Streaming"
    NON_STREAMING = "NonStreaming"

    __str__ = str.__str__


ApiModeOrStr: TypeAlias = Annotated[ApiMode | str, open_enum_validator(ApiMode)]
