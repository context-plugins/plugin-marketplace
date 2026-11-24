from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiMode1AmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText
    Amazon Lex Runtime API are used."""

    STREAMING = "Streaming"
    NON_STREAMING = "NonStreaming"

    __str__ = str.__str__


ApiMode1AmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    ApiMode1AmazonLexModelBuildingV2TestsetsApi | str, open_enum_validator(ApiMode1AmazonLexModelBuildingV2TestsetsApi)
]
