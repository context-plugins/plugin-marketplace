from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .export_filter import ExportFilter, ExportFilterDict
from .export_sort_by import ExportSortBy, ExportSortByDict


class ListExportsRequest(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier that Amazon Lex assigned to the bot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot to list exports for."""

    sort_by: Optional[ExportSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[ExportFilter]] = UNSET
    """Provides the specification of a filter used to limit the exports in the response to only those that match the
    filter specification. You can only specify one filter and one string to filter on."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of exports to return in each page of results. If there are fewer results than the max page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListExports operation contains more results that specified in the maxResults parameter,
    a token is returned in the response. Use the returned token in the nextToken parameter of a ListExports request to
    return the next page of results. For a complete set of results, call the ListExports operation until the nextToken
    returned in the response is null."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """Specifies the resources that should be exported. If you don't specify a resource type in the filters parameter,
    both bot locales and custom vocabularies are exported."""


class ListExportsRequestDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    sort_by: NotRequired[ExportSortByDict]
    filters: NotRequired[list[ExportFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    locale_id: NotRequired[str]
