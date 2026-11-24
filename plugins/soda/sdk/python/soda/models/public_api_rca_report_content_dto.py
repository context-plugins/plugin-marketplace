from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.rca_asset_type_dto import RcaAssetTypeDtoOrStr
from .enums.rca_confidence_dto import RcaConfidenceDtoOrStr
from .enums.rca_report_status_dto import RcaReportStatusDtoOrStr


class PublicApiRcaReportContentDto(SdkBaseModel):
    agent_name: Optional[str] = Field(default=UNSET, alias="agentName")
    blast_radius_asset_type: Optional[RcaAssetTypeDtoOrStr] = Field(default=UNSET, alias="blastRadiusAssetType")
    blast_radius_count: Optional[int] = Field(default=UNSET, alias="blastRadiusCount")
    confidence: Optional[RcaConfidenceDtoOrStr] = UNSET
    duration_seconds: Optional[int] = Field(default=UNSET, alias="durationSeconds")
    generated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="generatedAt")
    id: Optional[str] = UNSET
    impact_summary: Optional[str] = Field(default=UNSET, alias="impactSummary")
    incident_id: Optional[str] = Field(default=UNSET, alias="incidentId")
    published_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    root_cause_summary: Optional[str] = Field(default=UNSET, alias="rootCauseSummary")
    status: Optional[RcaReportStatusDtoOrStr] = UNSET


class PublicApiRcaReportContentDtoDict(TypedDict):
    agent_name: NotRequired[str]
    blast_radius_asset_type: NotRequired[RcaAssetTypeDtoOrStr]
    blast_radius_count: NotRequired[int]
    confidence: NotRequired[RcaConfidenceDtoOrStr]
    duration_seconds: NotRequired[int]
    generated_at: NotRequired[RFC3339DateTime]
    id: NotRequired[str]
    impact_summary: NotRequired[str]
    incident_id: NotRequired[str]
    published_at: NotRequired[RFC3339DateTime]
    root_cause_summary: NotRequired[str]
    status: NotRequired[RcaReportStatusDtoOrStr]
