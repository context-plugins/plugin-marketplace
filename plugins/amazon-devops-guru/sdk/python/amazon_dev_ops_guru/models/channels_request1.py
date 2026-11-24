from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChannelsRequest1(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""


class ChannelsRequest1Dict(TypedDict):
    next_token: NotRequired[str]
