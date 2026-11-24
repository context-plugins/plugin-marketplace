from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resiliency_group_type import ResiliencyGroupTypeOrStr
from .enums.state1 import State1OrStr


class ResiliencyGroupSummary(SdkBaseModel):
    resiliency_group_id: Optional[str] = Field(default=UNSET, alias="resiliencyGroupId")
    """The ID of the resiliency group."""

    resiliency_group_arn: Optional[str] = Field(default=UNSET, alias="resiliencyGroupArn")
    """The Amazon Resource Name (ARN) of the resiliency group."""

    resiliency_group_name: Optional[str] = Field(default=UNSET, alias="resiliencyGroupName")
    """The name of the resiliency group."""

    resiliency_group_type: Optional[ResiliencyGroupTypeOrStr] = Field(default=UNSET, alias="resiliencyGroupType")
    """The type of the resiliency group. The valid value is Managed."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the resiliency group."""

    state: Optional[State1OrStr] = UNSET
    """The state of the resiliency group."""


class ResiliencyGroupSummaryDict(TypedDict):
    resiliency_group_id: NotRequired[str]
    resiliency_group_arn: NotRequired[str]
    resiliency_group_name: NotRequired[str]
    resiliency_group_type: NotRequired[ResiliencyGroupTypeOrStr]
    owner_account: NotRequired[str]
    state: NotRequired[State1OrStr]
