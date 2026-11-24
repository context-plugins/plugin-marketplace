from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .active_instance import ActiveInstance, ActiveInstanceDict


class ActiveInstancesResponse(SdkBaseModel):
    instances: list[ActiveInstance]
    total: int
    running_count: int
    terminated_count: int
    has_more: bool


class ActiveInstancesResponseDict(TypedDict):
    instances: list[ActiveInstanceDict]
    total: int
    running_count: int
    terminated_count: int
    has_more: bool
