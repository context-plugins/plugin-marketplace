from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_blast_radius_dto import PublicApiBlastRadiusDto, PublicApiBlastRadiusDtoDict
from .public_api_rca_affected_resource_dto import PublicApiRcaAffectedResourceDto, PublicApiRcaAffectedResourceDtoDict


class PublicApiImpactAssessmentDto(SdkBaseModel):
    affected_resources: Optional[list[PublicApiRcaAffectedResourceDto]] = Field(
        default=UNSET, alias="affectedResources"
    )
    blast_radius: Optional[PublicApiBlastRadiusDto] = Field(default=UNSET, alias="blastRadius")
    summary: Optional[str] = UNSET


class PublicApiImpactAssessmentDtoDict(TypedDict):
    affected_resources: NotRequired[list[PublicApiRcaAffectedResourceDtoDict]]
    blast_radius: NotRequired[PublicApiBlastRadiusDtoDict]
    summary: NotRequired[str]
