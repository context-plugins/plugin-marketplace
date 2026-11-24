from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WhatIfAnalysisSummary(SdkBaseModel):
    what_if_analysis_arn: Optional[str] = Field(default=UNSET, alias="WhatIfAnalysisArn")
    """The Amazon Resource Name (ARN) of the what-if analysis."""

    what_if_analysis_name: Optional[str] = Field(default=UNSET, alias="WhatIfAnalysisName")
    """The name of the what-if analysis."""

    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the what-if analysis. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis
    must be ACTIVE before you can access the analysis."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the what-if analysis was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""


class WhatIfAnalysisSummaryDict(TypedDict):
    what_if_analysis_arn: NotRequired[str]
    what_if_analysis_name: NotRequired[str]
    forecast_arn: NotRequired[str]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
