from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_id import ServiceId, ServiceIdDict


class AnomalousService(SdkBaseModel):
    service_id: Optional[ServiceId] = Field(default=UNSET, alias="ServiceId")


class AnomalousServiceDict(TypedDict):
    service_id: NotRequired[ServiceIdDict]
