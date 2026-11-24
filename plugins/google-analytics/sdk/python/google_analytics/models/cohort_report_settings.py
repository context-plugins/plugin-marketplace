from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CohortReportSettings(SdkBaseModel):
    """Optional settings of a cohort report."""

    accumulate: Optional[bool] = UNSET
    """If true, accumulates the result from first touch day to the end day. Not supported in ``RunReportRequest``."""


class CohortReportSettingsDict(TypedDict):
    accumulate: NotRequired[bool]
