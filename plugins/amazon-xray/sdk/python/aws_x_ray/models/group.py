from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insights_configuration import InsightsConfiguration, InsightsConfigurationDict


class Group(SdkBaseModel):
    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The unique case-sensitive name of the group."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The Amazon Resource Name (ARN) of the group generated based on the GroupName."""

    filter_expression: Optional[str] = Field(default=UNSET, alias="FilterExpression")
    """The filter expression defining the parameters to include traces."""

    insights_configuration: Optional[InsightsConfiguration] = Field(default=UNSET, alias="InsightsConfiguration")


class GroupDict(TypedDict):
    group_name: NotRequired[str]
    group_arn: NotRequired[str]
    filter_expression: NotRequired[str]
    insights_configuration: NotRequired[InsightsConfigurationDict]
