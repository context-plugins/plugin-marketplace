from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .state_machine_alias_list_item import StateMachineAliasListItem, StateMachineAliasListItemDict


class ListStateMachineAliasesOutput(SdkBaseModel):
    state_machine_aliases: list[StateMachineAliasListItem] = Field(alias="stateMachineAliases")
    """Aliases for the state machine."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""


class ListStateMachineAliasesOutputDict(TypedDict):
    state_machine_aliases: list[StateMachineAliasListItemDict]
    next_token: NotRequired[str]
