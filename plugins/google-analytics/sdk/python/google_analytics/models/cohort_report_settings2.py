from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CohortReportSettings2(SdkBaseModel):
    """Optional settings for a cohort report."""

    accumulate: Optional[bool] = UNSET
    """If true, accumulates the result from first touch day to the end day. Not supported in ``RunReportRequest``."""


class CohortReportSettings2Dict(TypedDict):
    accumulate: NotRequired[bool]
