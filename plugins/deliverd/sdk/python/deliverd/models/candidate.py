from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_deliverd_dev_audiences_api import TypeDeliverdDevAudiencesApiOrStr


class Candidate(SdkBaseModel):
    type_: TypeDeliverdDevAudiencesApiOrStr = Field(alias="type")
    id: UUID | None
    label: str
    detail: Optional[str] = UNSET
    score: float


class CandidateDict(TypedDict):
    type_: TypeDeliverdDevAudiencesApiOrStr
    id: UUID | None
    label: str
    detail: NotRequired[str]
    score: float
