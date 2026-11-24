from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cohort_info2 import CohortInfo2, CohortInfo2Dict
from .properties_info2 import PropertiesInfo2, PropertiesInfo2Dict
from .usage_metrics1 import UsageMetrics1, UsageMetrics1Dict
from .usage_snapshot2 import UsageSnapshot2, UsageSnapshot2Dict


class RuntimeInfo(SdkBaseModel):
    """Runtime information about workload execution."""

    approximate_usage: Optional[UsageMetrics1] = Field(default=UNSET, alias="approximateUsage")
    """Output only. Approximate workload resource usage, calculated when the workload completes (see Dataproc Serverless
    pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This metric calculation may change in the
    future, for example, to capture cumulative workload resource consumption during workload execution (see the Dataproc
    Serverless release notes (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements,
    changes, fixes and other Dataproc developments)."""

    cohort_info: Optional[CohortInfo2] = Field(default=UNSET, alias="cohortInfo")
    """Output only. Information about the cohort that the workload belongs to."""

    properties_info: Optional[PropertiesInfo2] = Field(default=UNSET, alias="propertiesInfo")
    """Optional. Properties of the workload organized by origin."""

    current_usage: Optional[UsageSnapshot2] = Field(default=UNSET, alias="currentUsage")
    """Output only. Snapshot of current workload resource usage."""

    output_uri: Optional[str] = Field(default=UNSET, alias="outputUri")
    """Output only. A URI pointing to the location of the stdout and stderr of the workload."""

    diagnostic_output_uri: Optional[str] = Field(default=UNSET, alias="diagnosticOutputUri")
    """Output only. A URI pointing to the location of the diagnostics tarball."""

    endpoints: Optional[dict[str, str]] = UNSET
    """Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs."""


class RuntimeInfoDict(TypedDict):
    approximate_usage: NotRequired[UsageMetrics1Dict]
    cohort_info: NotRequired[CohortInfo2Dict]
    properties_info: NotRequired[PropertiesInfo2Dict]
    current_usage: NotRequired[UsageSnapshot2Dict]
    output_uri: NotRequired[str]
    diagnostic_output_uri: NotRequired[str]
    endpoints: NotRequired[dict[str, str]]
