from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceARN")
    """The Amazon Resource Number (ARN) of an X-Ray group or sampling rule."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A pagination token. If multiple pages of results are returned, use the NextToken value returned with the current
    page of results as the value of this parameter to get the next page of results."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
    next_token: NotRequired[str]
