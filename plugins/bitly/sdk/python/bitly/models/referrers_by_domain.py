from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metric import Metric, MetricDict


class ReferrersByDomain(SdkBaseModel):
    network: Optional[str] = UNSET
    referrers: Optional[list[Metric]] = UNSET


class ReferrersByDomainDict(TypedDict):
    network: NotRequired[str]
    referrers: NotRequired[list[MetricDict]]
