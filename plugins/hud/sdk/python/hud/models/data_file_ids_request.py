from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataFileIdsRequest(SdkBaseModel):
    file_ids: list[UUID]


class DataFileIdsRequestDict(TypedDict):
    file_ids: list[UUID]
