from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.input_mode_amazon_lex_model_building_v2_testsetgenerations_api import (
    InputModeAmazonLexModelBuildingV2TestsetgenerationsApiOrStr,
)


class ConversationLogsDataSourceFilterBy(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="startTime")
    """The start time for the conversation log."""

    end_time: RFC3339DateTime = Field(alias="endTime")
    """The end time for the conversation log."""

    input_mode: InputModeAmazonLexModelBuildingV2TestsetgenerationsApiOrStr = Field(alias="inputMode")
    """The selection to filter by input mode for the conversation logs."""


class ConversationLogsDataSourceFilterByDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    input_mode: InputModeAmazonLexModelBuildingV2TestsetgenerationsApiOrStr
