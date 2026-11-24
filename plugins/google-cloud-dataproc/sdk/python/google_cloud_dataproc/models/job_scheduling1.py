from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobScheduling1(SdkBaseModel):
    """Optional. Job scheduling configuration."""

    max_failures_total: Optional[int] = Field(default=UNSET, alias="maxFailuresTotal")
    """Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a
    non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note:
    Currently, this restartable job option is not supported in Dataproc workflow templates
    (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template)."""

    max_failures_per_hour: Optional[int] = Field(default=UNSET, alias="maxFailuresPerHour")
    """Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero
    code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code
    four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in
    Dataproc workflow templates
    (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template)."""


class JobScheduling1Dict(TypedDict):
    max_failures_total: NotRequired[int]
    max_failures_per_hour: NotRequired[int]
