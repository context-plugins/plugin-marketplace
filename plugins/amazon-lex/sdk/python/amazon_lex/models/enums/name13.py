from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name13(str, Enum):
    """The category by which to filter the sessions. The descriptions for each option are as follows: BotAlias – The
    name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The
    modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with.
    Duration – The duration of the session. conversationEndState – The final state of the session. SessionId – The
    identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session.
    IntentPath – The order of intents taken i"""

    BOT_ALIAS_ID = "BotAliasId"
    BOT_VERSION = "BotVersion"
    LOCALE_ID = "LocaleId"
    MODALITY = "Modality"
    CHANNEL = "Channel"
    DURATION = "Duration"
    CONVERSATION_END_STATE = "ConversationEndState"
    SESSION_ID = "SessionId"
    ORIGINATING_REQUEST_ID = "OriginatingRequestId"
    INTENT_PATH = "IntentPath"

    __str__ = str.__str__


Name13OrStr: TypeAlias = Annotated[Name13 | str, open_enum_validator(Name13)]
