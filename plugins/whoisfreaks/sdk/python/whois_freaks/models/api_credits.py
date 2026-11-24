from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiCredits(SdkBaseModel):
    total_credits: Optional[int] = Field(default=UNSET, alias="totalCredits")
    served_request: Optional[int] = Field(default=UNSET, alias="servedRequest")


class ApiCreditsDict(TypedDict):
    total_credits: NotRequired[int]
    served_request: NotRequired[int]
