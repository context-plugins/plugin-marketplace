from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .routing_configuration_list_item import RoutingConfigurationListItem, RoutingConfigurationListItemDict


class UpdateStateMachineAliasInput(SdkBaseModel):
    state_machine_alias_arn: str = Field(alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) of the state machine alias."""

    description: Optional[str] = UNSET
    """A description of the state machine alias."""

    routing_configuration: Optional[list[RoutingConfigurationListItem]] = Field(
        default=UNSET, alias="routingConfiguration"
    )
    """The routing configuration of the state machine alias. An array of RoutingConfig objects that specifies up to two
    state machine versions that the alias starts executions for."""


class UpdateStateMachineAliasInputDict(TypedDict):
    state_machine_alias_arn: str
    description: NotRequired[str]
    routing_configuration: NotRequired[list[RoutingConfigurationListItemDict]]
