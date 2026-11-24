from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the status response
    element to BUILDING. In the READY_BASIC_TESTING state you can test the bot with user inputs that exactly match the
    utterances configured for the bot's intents and values in the slot types. If Amazon Lex can't build the bot, Amazon
    Lex sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element. When
    you set processBehavior to SAVE, Amazon Lex sets the status code to NOT BUILT. When the bot is in the READY state
    you can test and publish th"""

    BUILDING = "BUILDING"
    READY = "READY"
    READY_BASIC_TESTING = "READY_BASIC_TESTING"
    FAILED = "FAILED"
    NOT_BUILT = "NOT_BUILT"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
