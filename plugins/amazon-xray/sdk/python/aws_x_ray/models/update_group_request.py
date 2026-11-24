from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insights_configuration import InsightsConfiguration, InsightsConfigurationDict


class UpdateGroupRequest(SdkBaseModel):
    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The case-sensitive name of the group."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The ARN that was generated upon creation."""

    filter_expression: Optional[str] = Field(default=UNSET, alias="FilterExpression")
    """The updated filter expression defining criteria by which to group traces."""

    insights_configuration: Optional[InsightsConfiguration] = Field(default=UNSET, alias="InsightsConfiguration")


class UpdateGroupRequestDict(TypedDict):
    group_name: NotRequired[str]
    group_arn: NotRequired[str]
    filter_expression: NotRequired[str]
    insights_configuration: NotRequired[InsightsConfigurationDict]
