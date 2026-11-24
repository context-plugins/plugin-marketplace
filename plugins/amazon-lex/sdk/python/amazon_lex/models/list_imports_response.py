from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .import_summary import ImportSummary, ImportSummaryDict


class ListImportsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier assigned by Amazon Lex to the bot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was imported. It will always be DRAFT."""

    import_summaries: Optional[list[ImportSummary]] = Field(default=UNSET, alias="importSummaries")
    """Summary information for the imports that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter. If there are more imports available, the nextToken field contains a
    token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListImports operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListImports operation request
    to get the next page of results."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale specified in the request."""


class ListImportsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    import_summaries: NotRequired[list[ImportSummaryDict]]
    next_token: NotRequired[str]
    locale_id: NotRequired[str]
