from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhoneRecord(SdkBaseModel):
    mobile_phone: Optional[str] = Field(default=UNSET, alias="mobilePhone")
    confidence_score: Optional[float] = Field(default=UNSET, alias="confidenceScore")


class PhoneRecordDict(TypedDict):
    mobile_phone: NotRequired[str]
    confidence_score: NotRequired[float]
