from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .map_run_list_item import MapRunListItem, MapRunListItemDict


class ListMapRunsOutput(SdkBaseModel):
    map_runs: list[MapRunListItem] = Field(alias="mapRuns")
    """An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of the Map Run and
    the ARN of the state machine that started the Map Run."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""


class ListMapRunsOutputDict(TypedDict):
    map_runs: list[MapRunListItemDict]
    next_token: NotRequired[str]
