from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .conversation_logs_data_source_filter_by import (
    ConversationLogsDataSourceFilterBy,
    ConversationLogsDataSourceFilterByDict,
)


class ConversationLogsDataSource(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The bot Id from the conversation logs."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The bot alias Id from the conversation logs."""

    locale_id: str = Field(alias="localeId")
    """The locale Id of the conversation log."""

    filter: ConversationLogsDataSourceFilterBy


class ConversationLogsDataSourceDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    filter: ConversationLogsDataSourceFilterByDict
