from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .aggregated_utterances_summary import AggregatedUtterancesSummary, AggregatedUtterancesSummaryDict
from .utterance_aggregation_duration import UtteranceAggregationDuration, UtteranceAggregationDurationDict


class ListAggregatedUtterancesResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the utterances."""

    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the bot alias that contains the utterances. If you specified the bot version, the bot alias ID
    isn't returned."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The identifier of the bot version that contains the utterances. If you specified the bot alias, the bot version
    isn't returned."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale that the utterances are in."""

    aggregation_duration: Optional[UtteranceAggregationDuration] = Field(default=UNSET, alias="aggregationDuration")
    aggregation_window_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="aggregationWindowStartTime")
    """The date and time that the aggregation window begins. Only data collected after this time is returned in the
    results."""

    aggregation_window_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="aggregationWindowEndTime")
    """The date and time that the aggregation window ends. Only data collected between the start time and the end time
    are returned in the results."""

    aggregation_last_refreshed_date_time: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="aggregationLastRefreshedDateTime"
    )
    """The last date and time that the aggregated data was collected. The time period depends on the length of the
    aggregation window. Hours - for 1 hour time window, every half hour; otherwise every hour. Days - every 6 hours
    Weeks - for a one week time window, every 12 hours; otherwise, every day"""

    aggregated_utterances_summaries: Optional[list[AggregatedUtterancesSummary]] = Field(
        default=UNSET, alias="aggregatedUtterancesSummaries"
    )
    """Summaries of the aggregated utterance data. Each response contains information about the number of times that the
    utterance was seen during the time period, whether it was detected or missed, and when it was seen during the time
    period."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListAggregatedUtterances
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListAggregatedUtterances operation request to get the next page of results."""


class ListAggregatedUtterancesResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_alias_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    aggregation_duration: NotRequired[UtteranceAggregationDurationDict]
    aggregation_window_start_time: NotRequired[RFC3339DateTime]
    aggregation_window_end_time: NotRequired[RFC3339DateTime]
    aggregation_last_refreshed_date_time: NotRequired[RFC3339DateTime]
    aggregated_utterances_summaries: NotRequired[list[AggregatedUtterancesSummaryDict]]
    next_token: NotRequired[str]
