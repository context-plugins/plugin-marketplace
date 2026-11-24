from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardBatchAccepted(SdkBaseModel):
    job_id: Optional[UUID] = Field(default=UNSET, alias="jobId")
    status: Optional[str] = UNSET
    total_cards: Optional[int] = Field(default=UNSET, alias="totalCards")
    billing: Optional[str] = UNSET
    results_url: Optional[str] = Field(default=UNSET, alias="resultsUrl")


class CardBatchAcceptedDict(TypedDict):
    job_id: NotRequired[UUID]
    status: NotRequired[str]
    total_cards: NotRequired[int]
    billing: NotRequired[str]
    results_url: NotRequired[str]
