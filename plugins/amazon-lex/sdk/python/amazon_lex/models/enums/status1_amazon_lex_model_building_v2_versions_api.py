from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AmazonLexModelBuildingV2VersionsApi(str, Enum):
    """The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing and use. If the
    status of the bot is READY_BASIC_TESTING, you can test the bot using the exact utterances specified in the bot's
    intents. When the bot is ready for full testing or to run, the status is READY. If there was a problem with building
    the bot, the status is FAILED and the failureReason field explains why the bot did not build. If the bot was saved
    but not built, the status is NOT_BUILT."""

    BUILDING = "BUILDING"
    READY = "READY"
    READY_BASIC_TESTING = "READY_BASIC_TESTING"
    FAILED = "FAILED"
    NOT_BUILT = "NOT_BUILT"

    __str__ = str.__str__


Status1AmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    Status1AmazonLexModelBuildingV2VersionsApi | str, open_enum_validator(Status1AmazonLexModelBuildingV2VersionsApi)
]
