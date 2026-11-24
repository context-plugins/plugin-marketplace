from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name18(str, Enum):
    """The category by which to filter the utterances. The descriptions for each option are as follows: BotAlias – The
    name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The
    modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with.
    SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request
    in a session. UtteranceState – The state of the utterance. UtteranceText – The text in the utterance."""

    BOT_ALIAS_ID = "BotAliasId"
    BOT_VERSION = "BotVersion"
    LOCALE_ID = "LocaleId"
    MODALITY = "Modality"
    CHANNEL = "Channel"
    SESSION_ID = "SessionId"
    ORIGINATING_REQUEST_ID = "OriginatingRequestId"
    UTTERANCE_STATE = "UtteranceState"
    UTTERANCE_TEXT = "UtteranceText"

    __str__ = str.__str__


Name18OrStr: TypeAlias = Annotated[Name18 | str, open_enum_validator(Name18)]
