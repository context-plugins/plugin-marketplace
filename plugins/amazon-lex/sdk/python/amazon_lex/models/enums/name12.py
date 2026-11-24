from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name12(str, Enum):
    """The category by which to filter the intent paths. The descriptions for each option are as follows: BotAlias – The
    name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The
    modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated
    with."""

    BOT_ALIAS_ID = "BotAliasId"
    BOT_VERSION = "BotVersion"
    LOCALE_ID = "LocaleId"
    MODALITY = "Modality"
    CHANNEL = "Channel"

    __str__ = str.__str__


Name12OrStr: TypeAlias = Annotated[Name12 | str, open_enum_validator(Name12)]
