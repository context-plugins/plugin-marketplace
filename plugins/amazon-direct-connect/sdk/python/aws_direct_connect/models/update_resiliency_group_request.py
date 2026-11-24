from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateResiliencyGroupRequest(SdkBaseModel):
    resiliency_group_id: str = Field(alias="resiliencyGroupId")
    """The ID of the resiliency group."""

    resiliency_group_name: str = Field(alias="resiliencyGroupName")
    """The new name of the resiliency group."""

    client_token: Optional[str] = Field(default=UNSET, alias="clientToken")
    """A unique, case-sensitive identifier that you provide to ensure the idempotency of the request."""


class UpdateResiliencyGroupRequestDict(TypedDict):
    resiliency_group_id: str
    resiliency_group_name: str
    client_token: NotRequired[str]
