from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.intended_resiliency_model import IntendedResiliencyModelOrStr
from .tag_model import TagModel, TagModelDict


class CreateResiliencyGroupRequest(SdkBaseModel):
    resiliency_group_name: str = Field(alias="resiliencyGroupName")
    """The name of the resiliency group."""

    intended_resiliency_model: IntendedResiliencyModelOrStr = Field(alias="intendedResiliencyModel")
    """The resiliency model that the resiliency group is intended to meet. The valid values are maximum-resiliency,
    high-resiliency, and basic-resiliency."""

    client_token: Optional[str] = Field(default=UNSET, alias="clientToken")
    """A unique, case-sensitive identifier that you provide to ensure the idempotency of the request."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags to associate with the resiliency group."""


class CreateResiliencyGroupRequestDict(TypedDict):
    resiliency_group_name: str
    intended_resiliency_model: IntendedResiliencyModelOrStr
    client_token: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
