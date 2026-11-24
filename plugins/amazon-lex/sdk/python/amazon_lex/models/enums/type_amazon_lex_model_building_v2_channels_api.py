from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonLexModelBuildingV2ChannelsApi(str, Enum):
    """Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot
    and the external messaging platform."""

    FACEBOOK = "Facebook"
    SLACK = "Slack"
    TWILIO_SMS = "Twilio-Sms"
    KIK = "Kik"

    __str__ = str.__str__


TypeAmazonLexModelBuildingV2ChannelsApiOrStr: TypeAlias = Annotated[
    TypeAmazonLexModelBuildingV2ChannelsApi | str, open_enum_validator(TypeAmazonLexModelBuildingV2ChannelsApi)
]
