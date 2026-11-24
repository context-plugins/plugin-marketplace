from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.rca_confidence_dto import RcaConfidenceDtoOrStr
from .enums.rca_report_status_dto import RcaReportStatusDtoOrStr
from .public_api_rca_investigation_step_dto import (
    PublicApiRcaInvestigationStepDto,
    PublicApiRcaInvestigationStepDtoDict,
)
from .public_api_rca_lineage_dto import PublicApiRcaLineageDto, PublicApiRcaLineageDtoDict
from .public_api_rca_remediation_item_dto import PublicApiRcaRemediationItemDto, PublicApiRcaRemediationItemDtoDict
from .public_api_rca_resource_ref_dto import PublicApiRcaResourceRefDto, PublicApiRcaResourceRefDtoDict


class PublicApiRootCauseAnalysisDto(SdkBaseModel):
    confidence: RcaConfidenceDtoOrStr
    duration_seconds: Optional[int] = Field(default=UNSET, alias="durationSeconds")
    generated_at: RFC3339DateTime = Field(alias="generatedAt")
    investigation: Optional[list[PublicApiRcaInvestigationStepDto]] = UNSET
    lineage: Optional[PublicApiRcaLineageDto] = UNSET
    remediation: Optional[list[PublicApiRcaRemediationItemDto]] = UNSET
    root_cause_resource: Optional[PublicApiRcaResourceRefDto] = Field(default=UNSET, alias="rootCauseResource")
    status: RcaReportStatusDtoOrStr
    summary: str


class PublicApiRootCauseAnalysisDtoDict(TypedDict):
    confidence: RcaConfidenceDtoOrStr
    duration_seconds: NotRequired[int]
    generated_at: RFC3339DateTime
    investigation: NotRequired[list[PublicApiRcaInvestigationStepDtoDict]]
    lineage: NotRequired[PublicApiRcaLineageDtoDict]
    remediation: NotRequired[list[PublicApiRcaRemediationItemDtoDict]]
    root_cause_resource: NotRequired[PublicApiRcaResourceRefDtoDict]
    status: RcaReportStatusDtoOrStr
    summary: str
