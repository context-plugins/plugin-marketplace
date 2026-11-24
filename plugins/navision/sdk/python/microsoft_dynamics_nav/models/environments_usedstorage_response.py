from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .used_storage import UsedStorage, UsedStorageDict


class EnvironmentsUsedstorageResponse(SdkBaseModel):
    value: Optional[list[UsedStorage]] = UNSET


class EnvironmentsUsedstorageResponseDict(TypedDict):
    value: NotRequired[list[UsedStorageDict]]
