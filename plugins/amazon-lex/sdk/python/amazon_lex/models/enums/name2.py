from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name2(str, Enum):
    """The category by which to filter the intents. The descriptions for each option are as follows: BotAlias – The name
    of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of
    the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. SessionId –
    The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session.
    IntentName – The name of the intent. IntentEndState – The final state of the intent."""

    BOT_ALIAS_ID = "BotAliasId"
    BOT_VERSION = "BotVersion"
    LOCALE_ID = "LocaleId"
    MODALITY = "Modality"
    CHANNEL = "Channel"
    SESSION_ID = "SessionId"
    ORIGINATING_REQUEST_ID = "OriginatingRequestId"
    INTENT_NAME = "IntentName"
    INTENT_END_STATE = "IntentEndState"

    __str__ = str.__str__


Name2OrStr: TypeAlias = Annotated[Name2 | str, open_enum_validator(Name2)]
