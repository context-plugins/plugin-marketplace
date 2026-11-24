from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiModeAmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex
    Runtime API are used."""

    STREAMING = "Streaming"
    NON_STREAMING = "NonStreaming"

    __str__ = str.__str__


ApiModeAmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    ApiModeAmazonLexModelBuildingV2TestsetsApi | str, open_enum_validator(ApiModeAmazonLexModelBuildingV2TestsetsApi)
]
