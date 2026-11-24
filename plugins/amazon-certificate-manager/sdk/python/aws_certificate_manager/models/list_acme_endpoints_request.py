from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListAcmeEndpointsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return."""


class ListAcmeEndpointsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
