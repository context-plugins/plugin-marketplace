from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRole1AmazonTranscribeServiceOperationsApi(str, Enum):
    """Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT."""

    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

    __str__ = str.__str__


ParticipantRole1AmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    ParticipantRole1AmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(ParticipantRole1AmazonTranscribeServiceOperationsApi),
]
