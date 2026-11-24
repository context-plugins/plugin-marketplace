from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .created import Created, CreatedDict
from .non_deleted import NonDeleted, NonDeletedDict


class DatumCoreAnalyticsApi(SdkBaseModel):
    date: Optional[str] = UNSET
    disruption_rate: Optional[str] = Field(default=UNSET, alias="disruptionRate")
    created: Optional[Created] = UNSET
    non_deleted: Optional[NonDeleted] = Field(default=UNSET, alias="nonDeleted")


class DatumCoreAnalyticsApiDict(TypedDict):
    date: NotRequired[str]
    disruption_rate: NotRequired[str]
    created: NotRequired[CreatedDict]
    non_deleted: NotRequired[NonDeletedDict]
