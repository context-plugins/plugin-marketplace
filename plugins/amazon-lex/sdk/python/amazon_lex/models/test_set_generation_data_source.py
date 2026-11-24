from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_logs_data_source import ConversationLogsDataSource, ConversationLogsDataSourceDict


class TestSetGenerationDataSource(SdkBaseModel):
    conversation_logs_data_source: Optional[ConversationLogsDataSource] = Field(
        default=UNSET, alias="conversationLogsDataSource"
    )


class TestSetGenerationDataSourceDict(TypedDict):
    conversation_logs_data_source: NotRequired[ConversationLogsDataSourceDict]
