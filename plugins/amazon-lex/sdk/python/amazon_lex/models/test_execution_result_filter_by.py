from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_level_test_results_filter_by import (
    ConversationLevelTestResultsFilterBy,
    ConversationLevelTestResultsFilterByDict,
)
from .enums.result_type_filter import ResultTypeFilterOrStr


class TestExecutionResultFilterBy(SdkBaseModel):
    result_type_filter: ResultTypeFilterOrStr = Field(alias="resultTypeFilter")
    """Specifies which results to filter. See Test result details">Test results details for details about different
    types of results."""

    conversation_level_test_results_filter_by: Optional[ConversationLevelTestResultsFilterBy] = Field(
        default=UNSET, alias="conversationLevelTestResultsFilterBy"
    )


class TestExecutionResultFilterByDict(TypedDict):
    result_type_filter: ResultTypeFilterOrStr
    conversation_level_test_results_filter_by: NotRequired[ConversationLevelTestResultsFilterByDict]
