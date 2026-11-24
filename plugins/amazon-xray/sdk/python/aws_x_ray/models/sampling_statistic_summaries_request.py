from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SamplingStatisticSummariesRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class SamplingStatisticSummariesRequestDict(TypedDict):
    next_token: NotRequired[str]
