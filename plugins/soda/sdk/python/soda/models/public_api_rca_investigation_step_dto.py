from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_rca_evidence_dto import PublicApiRcaEvidenceDto, PublicApiRcaEvidenceDtoDict


class PublicApiRcaInvestigationStepDto(SdkBaseModel):
    detail: Optional[str] = UNSET
    evidence: Optional[list[PublicApiRcaEvidenceDto]] = UNSET
    order: Optional[int] = UNSET
    title: str


class PublicApiRcaInvestigationStepDtoDict(TypedDict):
    detail: NotRequired[str]
    evidence: NotRequired[list[PublicApiRcaEvidenceDtoDict]]
    order: NotRequired[int]
    title: str
