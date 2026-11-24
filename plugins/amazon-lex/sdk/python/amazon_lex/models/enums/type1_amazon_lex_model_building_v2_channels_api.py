from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1AmazonLexModelBuildingV2ChannelsApi(str, Enum):
    """The type of the messaging platform."""

    FACEBOOK = "Facebook"
    SLACK = "Slack"
    TWILIO_SMS = "Twilio-Sms"
    KIK = "Kik"

    __str__ = str.__str__


Type1AmazonLexModelBuildingV2ChannelsApiOrStr: TypeAlias = Annotated[
    Type1AmazonLexModelBuildingV2ChannelsApi | str, open_enum_validator(Type1AmazonLexModelBuildingV2ChannelsApi)
]
