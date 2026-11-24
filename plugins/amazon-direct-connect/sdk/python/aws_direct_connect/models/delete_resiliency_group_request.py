from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteResiliencyGroupRequest(SdkBaseModel):
    resiliency_group_id: str = Field(alias="resiliencyGroupId")
    """The ID of the resiliency group."""


class DeleteResiliencyGroupRequestDict(TypedDict):
    resiliency_group_id: str
