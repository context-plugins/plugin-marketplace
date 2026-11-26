from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .restore_period import RestorePeriod, RestorePeriodDict


class ApplicationsEnvironmentsAvailableRestorePeriodsResponse(SdkBaseModel):
    value: Optional[list[RestorePeriod]] = UNSET


class ApplicationsEnvironmentsAvailableRestorePeriodsResponseDict(TypedDict):
    value: NotRequired[list[RestorePeriodDict]]
