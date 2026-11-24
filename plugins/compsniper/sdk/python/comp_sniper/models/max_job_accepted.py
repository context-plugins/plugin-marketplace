from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.delivery import DeliveryOrStr


class MaxJobAccepted(SdkBaseModel):
    job_id: UUID = Field(alias="jobId")
    status: str
    keyword: Optional[str] = UNSET
    max_pages: Optional[int] = Field(default=UNSET, alias="maxPages")
    delivery: Optional[DeliveryOrStr] = UNSET
    results_url: str = Field(alias="resultsUrl")


class MaxJobAcceptedDict(TypedDict):
    job_id: UUID
    status: str
    keyword: NotRequired[str]
    max_pages: NotRequired[int]
    delivery: NotRequired[DeliveryOrStr]
    results_url: str
