from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .state_machine_version_list_item import StateMachineVersionListItem, StateMachineVersionListItemDict


class ListStateMachineVersionsOutput(SdkBaseModel):
    state_machine_versions: list[StateMachineVersionListItem] = Field(alias="stateMachineVersions")
    """Versions for the state machine."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""


class ListStateMachineVersionsOutputDict(TypedDict):
    state_machine_versions: list[StateMachineVersionListItemDict]
    next_token: NotRequired[str]
