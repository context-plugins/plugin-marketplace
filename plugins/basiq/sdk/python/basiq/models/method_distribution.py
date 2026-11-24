from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MethodDistribution(SdkBaseModel):
    cdr: Optional[int] = Field(default=UNSET, alias="CDR")
    csv: Optional[int] = Field(default=UNSET, alias="CSV")
    pdf: Optional[int] = Field(default=UNSET, alias="PDF")
    web: Optional[int] = Field(default=UNSET, alias="WEB")


class MethodDistributionDict(TypedDict):
    cdr: NotRequired[int]
    csv: NotRequired[int]
    pdf: NotRequired[int]
    web: NotRequired[int]
