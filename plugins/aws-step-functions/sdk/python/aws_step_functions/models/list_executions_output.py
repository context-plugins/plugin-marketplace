from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_list_item import ExecutionListItem, ExecutionListItemDict


class ListExecutionsOutput(SdkBaseModel):
    executions: list[ExecutionListItem]
    """The list of matching executions."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""


class ListExecutionsOutputDict(TypedDict):
    executions: list[ExecutionListItemDict]
    next_token: NotRequired[str]
