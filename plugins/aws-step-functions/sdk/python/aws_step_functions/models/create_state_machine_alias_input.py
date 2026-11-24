from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .routing_configuration_list_item import RoutingConfigurationListItem, RoutingConfigurationListItemDict


class CreateStateMachineAliasInput(SdkBaseModel):
    description: Optional[str] = UNSET
    """A description for the state machine alias."""

    name: str
    """The name of the state machine alias. To avoid conflict with version ARNs, don't use an integer in the name of the
    alias."""

    routing_configuration: list[RoutingConfigurationListItem] = Field(alias="routingConfiguration")
    """The routing configuration of a state machine alias. The routing configuration shifts execution traffic between
    two state machine versions. routingConfiguration contains an array of RoutingConfig objects that specify up to two
    state machine versions. Step Functions then randomly choses which version to run an execution with based on the
    weight assigned to each RoutingConfig."""


class CreateStateMachineAliasInputDict(TypedDict):
    description: NotRequired[str]
    name: str
    routing_configuration: list[RoutingConfigurationListItemDict]
