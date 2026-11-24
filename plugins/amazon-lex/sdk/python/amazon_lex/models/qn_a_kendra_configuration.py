from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QnAKendraConfiguration(SdkBaseModel):
    kendra_index: str = Field(alias="kendraIndex")
    """The ARN of the Amazon Kendra index to use."""

    query_filter_string_enabled: Optional[bool] = Field(default=UNSET, alias="queryFilterStringEnabled")
    """Specifies whether to enable an Amazon Kendra filter string or not."""

    query_filter_string: Optional[str] = Field(default=UNSET, alias="queryFilterString")
    """Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon Kendra search
    filter JSON format, see Using document attributes to filter search results."""

    exact_response: Optional[bool] = Field(default=UNSET, alias="exactResponse")
    """Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon Bedrock model you
    select generate a response based on the results. To use this feature, you must first add FAQ questions to your index
    by following the steps at Adding frequently asked questions (FAQs) to an index."""


class QnAKendraConfigurationDict(TypedDict):
    kendra_index: str
    query_filter_string_enabled: NotRequired[bool]
    query_filter_string: NotRequired[str]
    exact_response: NotRequired[bool]
