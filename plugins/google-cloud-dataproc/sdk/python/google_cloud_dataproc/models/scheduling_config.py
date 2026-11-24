from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SchedulingConfig(SdkBaseModel):
    """Config for scheduling the request to create Compute Engine resources for the cluster, when available."""

    requested_run_duration: Optional[str] = Field(default=UNSET, alias="requestedRunDuration")
    """Optional. Required lifetime of the resources, once provisioned. Min 10 mins, Max/Default 7 days . Note that the
    cluster can still be deleted before reaching this time. This time is a maximum amount of time before the cluster is
    forcibly deleted. Lower times are more likely to start running sooner."""

    scheduling_timeout: Optional[str] = Field(default=UNSET, alias="schedulingTimeout")
    """Optional. How long to wait for worker resources to be allocated before failing the cluster creation request.
    Max/Default value: 13 days"""


class SchedulingConfigDict(TypedDict):
    requested_run_duration: NotRequired[str]
    scheduling_timeout: NotRequired[str]
