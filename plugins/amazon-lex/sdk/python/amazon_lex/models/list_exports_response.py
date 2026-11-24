from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .export_summary import ExportSummary, ExportSummaryDict


class ListExportsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier assigned to the bot by Amazon Lex."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was exported."""

    export_summaries: Optional[list[ExportSummary]] = Field(default=UNSET, alias="exportSummaries")
    """Summary information for the exports that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter. If there are more exports available, the nextToken field contains a
    token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListExports operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListExports operation request
    to get the next page of results."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale specified in the request."""


class ListExportsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    export_summaries: NotRequired[list[ExportSummaryDict]]
    next_token: NotRequired[str]
    locale_id: NotRequired[str]
