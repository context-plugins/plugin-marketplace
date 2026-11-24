from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_score_component import (
    GoogleCloudApigeeV1ScoreComponent,
    GoogleCloudApigeeV1ScoreComponentDict,
)
from .google_cloud_apigee_v1_score_component2 import (
    GoogleCloudApigeeV1ScoreComponent2,
    GoogleCloudApigeeV1ScoreComponent2Dict,
)
from .google_type_interval5 import GoogleTypeInterval5, GoogleTypeInterval5Dict


class GoogleCloudApigeeV1Score(SdkBaseModel):
    """Represents Security Score."""

    component: Optional[GoogleCloudApigeeV1ScoreComponent2] = UNSET
    """Component containing score, recommendations and actions."""

    time_range: Optional[GoogleTypeInterval5] = Field(default=UNSET, alias="timeRange")
    """Start and end time for the score."""

    subcomponents: Optional[list[GoogleCloudApigeeV1ScoreComponent]] = UNSET
    """List of all the drilldown score components."""


class GoogleCloudApigeeV1ScoreDict(TypedDict):
    component: NotRequired[GoogleCloudApigeeV1ScoreComponent2Dict]
    time_range: NotRequired[GoogleTypeInterval5Dict]
    subcomponents: NotRequired[list[GoogleCloudApigeeV1ScoreComponentDict]]
