from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .status_distribution import StatusDistribution, StatusDistributionDict


class MethodDistribution1(SdkBaseModel):
    cdr: Optional[StatusDistribution] = Field(default=UNSET, alias="CDR")
    csv: Optional[StatusDistribution] = Field(default=UNSET, alias="CSV")
    pdf: Optional[StatusDistribution] = Field(default=UNSET, alias="PDF")
    web: Optional[StatusDistribution] = Field(default=UNSET, alias="WEB")


class MethodDistribution1Dict(TypedDict):
    cdr: NotRequired[StatusDistributionDict]
    csv: NotRequired[StatusDistributionDict]
    pdf: NotRequired[StatusDistributionDict]
    web: NotRequired[StatusDistributionDict]
