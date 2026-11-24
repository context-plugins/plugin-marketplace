from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch_restrictions import BatchRestrictions, BatchRestrictionsDict
from .enums.batch_report_mode import BatchReportModeOrStr


class ProjectBuildBatchConfig(SdkBaseModel):
    service_role: Optional[str] = Field(default=UNSET, alias="serviceRole")
    """Specifies the service role ARN for the batch build project."""

    combine_artifacts: Optional[bool] = Field(default=UNSET, alias="combineArtifacts")
    """Specifies if the build artifacts for the batch build should be combined into a single artifact location."""

    restrictions: Optional[BatchRestrictions] = UNSET
    timeout_in_mins: Optional[int] = Field(default=UNSET, alias="timeoutInMins")
    """Specifies the maximum amount of time, in minutes, that the batch build must be completed in."""

    batch_report_mode: Optional[BatchReportModeOrStr] = Field(default=UNSET, alias="batchReportMode")
    """Specifies how build status reports are sent to the source provider for the batch build. This property is only
    used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is
    configured to report build statuses to the source provider. REPORT_AGGREGATED_BATCH (Default) Aggregate all of the
    build statuses into a single status report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each
    individual build."""


class ProjectBuildBatchConfigDict(TypedDict):
    service_role: NotRequired[str]
    combine_artifacts: NotRequired[bool]
    restrictions: NotRequired[BatchRestrictionsDict]
    timeout_in_mins: NotRequired[int]
    batch_report_mode: NotRequired[BatchReportModeOrStr]
