from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aggregated_utterances_filter import AggregatedUtterancesFilter, AggregatedUtterancesFilterDict
from .aggregated_utterances_sort_by import AggregatedUtterancesSortBy, AggregatedUtterancesSortByDict
from .utterance_aggregation_duration import UtteranceAggregationDuration, UtteranceAggregationDurationDict


class ListAggregatedUtterancesRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot associated with this request."""

    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the
    bot version."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The identifier of the bot version associated with this request. If you specify the bot version, you can't specify
    the bot alias."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where the utterances were collected. For more information, see
    Supported languages."""

    aggregation_duration: UtteranceAggregationDuration = Field(alias="aggregationDuration")
    sort_by: Optional[AggregatedUtterancesSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[AggregatedUtterancesFilter]] = UNSET
    """Provides the specification of a filter used to limit the utterances in the response to only those that match the
    filter specification. You can only specify one filter and one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of utterances to return in each page of results. If there are fewer results than the maximum
    page size, only the actual number of results are returned. If you don't specify the maxResults parameter, 1,000
    results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListAggregatedUtterances operation contains more results that specified in the
    maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the
    next page of results."""


class ListAggregatedUtterancesRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: str
    aggregation_duration: UtteranceAggregationDurationDict
    sort_by: NotRequired[AggregatedUtterancesSortByDict]
    filters: NotRequired[list[AggregatedUtterancesFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
