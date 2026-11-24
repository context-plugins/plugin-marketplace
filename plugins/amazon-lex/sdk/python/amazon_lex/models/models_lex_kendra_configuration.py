from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelsLexKendraConfiguration(SdkBaseModel):
    kendra_index: str = Field(alias="kendraIndex")
    """The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to
    search. The index must be in the same account and Region as the Amazon Lex bot. If the Amazon Kendra index does not
    exist, you get an exception when you call the PutIntent operation."""

    query_filter_string: Optional[str] = Field(default=UNSET, alias="queryFilterString")
    """A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query. The filter is in the
    format defined by Amazon Kendra. For more information, see Filtering queries. You can override this filter string
    with a new filter string at runtime."""

    role: str
    """The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra index. The role
    must be in the same account and Region as the Amazon Lex bot. If the role does not exist, you get an exception when
    you call the PutIntent operation."""


class ModelsLexKendraConfigurationDict(TypedDict):
    kendra_index: str
    query_filter_string: NotRequired[str]
    role: str
