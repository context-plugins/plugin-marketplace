from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_rca_metric_dto import PublicApiRcaMetricDto, PublicApiRcaMetricDtoDict
from .public_api_rca_resource_ref_dto import PublicApiRcaResourceRefDto, PublicApiRcaResourceRefDtoDict


class PublicApiRcaAffectedResourceDto(SdkBaseModel):
    description: str
    metrics: Optional[list[PublicApiRcaMetricDto]] = UNSET
    resource: PublicApiRcaResourceRefDto


class PublicApiRcaAffectedResourceDtoDict(TypedDict):
    description: str
    metrics: NotRequired[list[PublicApiRcaMetricDtoDict]]
    resource: PublicApiRcaResourceRefDtoDict
