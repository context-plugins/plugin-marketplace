from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environments_count import EnvironmentsCount, EnvironmentsCountDict
from .storage_in_kilobytes import StorageInKilobytes, StorageInKilobytesDict


class Quotas(SdkBaseModel):
    environments_count: Optional[EnvironmentsCount] = Field(default=UNSET, alias="environmentsCount")
    storage_in_kilobytes: Optional[StorageInKilobytes] = Field(default=UNSET, alias="storageInKilobytes")


class QuotasDict(TypedDict):
    environments_count: NotRequired[EnvironmentsCountDict]
    storage_in_kilobytes: NotRequired[StorageInKilobytesDict]
