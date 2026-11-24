from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RoutingConfigurationListItem(SdkBaseModel):
    state_machine_version_arn: str = Field(alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing
    configuration. If you specify the ARN of a second version, it must belong to the same state machine as the first
    version."""

    weight: int
    """The percentage of traffic you want to route to a state machine version. The sum of the weights in the routing
    configuration must be equal to 100."""


class RoutingConfigurationListItemDict(TypedDict):
    state_machine_version_arn: str
    weight: int
