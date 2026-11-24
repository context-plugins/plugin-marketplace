from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonLexModelBuildingV2ChannelsApi(str, Enum):
    """The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel
    creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the
    failure, see the failureReason field."""

    IN_PROGRESS = "IN_PROGRESS"
    CREATED = "CREATED"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAmazonLexModelBuildingV2ChannelsApiOrStr: TypeAlias = Annotated[
    StatusAmazonLexModelBuildingV2ChannelsApi | str, open_enum_validator(StatusAmazonLexModelBuildingV2ChannelsApi)
]
