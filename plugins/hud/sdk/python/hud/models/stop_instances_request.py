from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopInstancesRequest(SdkBaseModel):
    registry_id: UUID
    instance_ids: list[UUID]


class StopInstancesRequestDict(TypedDict):
    registry_id: UUID
    instance_ids: list[UUID]
