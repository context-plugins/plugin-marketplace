from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_impact_assessment_dto import PublicApiImpactAssessmentDto, PublicApiImpactAssessmentDtoDict
from .public_api_rca_agent_dto import PublicApiRcaAgentDto, PublicApiRcaAgentDtoDict
from .public_api_root_cause_analysis_dto import PublicApiRootCauseAnalysisDto, PublicApiRootCauseAnalysisDtoDict


class PublicApiRcaReportDto(SdkBaseModel):
    agent: PublicApiRcaAgentDto
    impact_assessment: Optional[PublicApiImpactAssessmentDto] = Field(default=UNSET, alias="impactAssessment")
    root_cause_analysis: PublicApiRootCauseAnalysisDto = Field(alias="rootCauseAnalysis")


class PublicApiRcaReportDtoDict(TypedDict):
    agent: PublicApiRcaAgentDtoDict
    impact_assessment: NotRequired[PublicApiImpactAssessmentDtoDict]
    root_cause_analysis: PublicApiRootCauseAnalysisDtoDict
