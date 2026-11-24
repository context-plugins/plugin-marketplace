from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KendraConfiguration(SdkBaseModel):
    kendra_index: str = Field(alias="kendraIndex")
    """The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to
    search. The index must be in the same account and Region as the Amazon Lex bot."""

    query_filter_string_enabled: Optional[bool] = Field(default=UNSET, alias="queryFilterStringEnabled")
    """Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra
    index."""

    query_filter_string: Optional[str] = Field(default=UNSET, alias="queryFilterString")
    """A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the
    format defined by Amazon Kendra. For more information, see Filtering queries."""


class KendraConfigurationDict(TypedDict):
    kendra_index: str
    query_filter_string_enabled: NotRequired[bool]
    query_filter_string: NotRequired[str]
