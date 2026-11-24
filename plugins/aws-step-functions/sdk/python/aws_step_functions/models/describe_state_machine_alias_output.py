from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .routing_configuration_list_item import RoutingConfigurationListItem, RoutingConfigurationListItemDict


class DescribeStateMachineAliasOutput(SdkBaseModel):
    state_machine_alias_arn: Optional[str] = Field(default=UNSET, alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) of the state machine alias."""

    name: Optional[str] = UNSET
    """The name of the state machine alias."""

    description: Optional[str] = UNSET
    """A description of the alias."""

    routing_configuration: Optional[list[RoutingConfigurationListItem]] = Field(
        default=UNSET, alias="routingConfiguration"
    )
    """The routing configuration of the alias."""

    creation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDate")
    """The date the state machine alias was created."""

    update_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updateDate")
    """The date the state machine alias was last updated. For a newly created state machine, this is the same as the
    creation date."""


class DescribeStateMachineAliasOutputDict(TypedDict):
    state_machine_alias_arn: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    routing_configuration: NotRequired[list[RoutingConfigurationListItemDict]]
    creation_date: NotRequired[RFC3339DateTime]
    update_date: NotRequired[RFC3339DateTime]
