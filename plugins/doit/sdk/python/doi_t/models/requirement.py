from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .candidate import Candidate, CandidateDict
from .enums.resolution_doi_t_cloud_flow_api import ResolutionDoiTCloudFlowApiOrStr
from .enums.section import SectionOrStr


class Requirement(SdkBaseModel):
    section: SectionOrStr
    key: str
    resolution: ResolutionDoiTCloudFlowApiOrStr
    bound_to: Optional[str] = Field(default=UNSET, alias="boundTo")
    candidates: Optional[list[Candidate]] = UNSET
    consequence_if_unbound: Optional[str] = Field(default=UNSET, alias="consequenceIfUnbound")


class RequirementDict(TypedDict):
    section: SectionOrStr
    key: str
    resolution: ResolutionDoiTCloudFlowApiOrStr
    bound_to: NotRequired[str]
    candidates: NotRequired[list[CandidateDict]]
    consequence_if_unbound: NotRequired[str]
