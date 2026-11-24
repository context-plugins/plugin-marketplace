from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rca_node_status_dto import RcaNodeStatusDtoOrStr
from .public_api_rca_resource_ref_dto import PublicApiRcaResourceRefDto, PublicApiRcaResourceRefDtoDict


class PublicApiRcaLineageNodeDto(SdkBaseModel):
    id: str
    incident_asset: Optional[bool] = Field(default=UNSET, alias="incidentAsset")
    name: str
    namespace: Optional[str] = UNSET
    platform: Optional[str] = UNSET
    soda_resource: Optional[PublicApiRcaResourceRefDto] = Field(default=UNSET, alias="sodaResource")
    status: Optional[RcaNodeStatusDtoOrStr] = UNSET


class PublicApiRcaLineageNodeDtoDict(TypedDict):
    id: str
    incident_asset: NotRequired[bool]
    name: str
    namespace: NotRequired[str]
    platform: NotRequired[str]
    soda_resource: NotRequired[PublicApiRcaResourceRefDtoDict]
    status: NotRequired[RcaNodeStatusDtoOrStr]
