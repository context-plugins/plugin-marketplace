from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2AmazonLexModelBuildingV2VersionsApi(str, Enum):
    """When you send a request to create or update a bot, Amazon Lex sets the status response element to BUILDING. After
    Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, it sets status to FAILED.
    Amazon Lex returns the reason for the failure in the failureReason response element."""

    BUILDING = "BUILDING"
    READY = "READY"
    READY_BASIC_TESTING = "READY_BASIC_TESTING"
    FAILED = "FAILED"
    NOT_BUILT = "NOT_BUILT"

    __str__ = str.__str__


Status2AmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    Status2AmazonLexModelBuildingV2VersionsApi | str, open_enum_validator(Status2AmazonLexModelBuildingV2VersionsApi)
]
