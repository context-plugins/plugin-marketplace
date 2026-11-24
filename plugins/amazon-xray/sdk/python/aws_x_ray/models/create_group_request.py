from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insights_configuration import InsightsConfiguration, InsightsConfigurationDict
from .tag_model import TagModel, TagModelDict


class CreateGroupRequest(SdkBaseModel):
    group_name: str = Field(alias="GroupName")
    """The case-sensitive name of the new group. Default is a reserved name and names must be unique."""

    filter_expression: Optional[str] = Field(default=UNSET, alias="FilterExpression")
    """The filter expression defining criteria by which to group traces."""

    insights_configuration: Optional[InsightsConfiguration] = Field(default=UNSET, alias="InsightsConfiguration")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about
    ways to use tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The
    following restrictions apply to tags: Maximum number of user-applied tags per resource: 50 Maximum tag key length:
    128 Unicode characters Maximum tag value length: 256 Unicode characters Valid values for key and value: a-z, A-Z,
    0-9, space, and the following characters: _ . : / = + - and @ Tag keys and values are case sensitive. Don't use aws:
    as a prefix for keys; it's reser"""


class CreateGroupRequestDict(TypedDict):
    group_name: str
    filter_expression: NotRequired[str]
    insights_configuration: NotRequired[InsightsConfigurationDict]
    tags: NotRequired[list[TagModelDict]]
