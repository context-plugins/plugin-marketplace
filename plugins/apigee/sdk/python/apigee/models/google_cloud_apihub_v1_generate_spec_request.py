from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_interval1_apigee_projects_api import (
    GoogleTypeInterval1ApigeeProjectsApi,
    GoogleTypeInterval1ApigeeProjectsApiDict,
)


class GoogleCloudApihubV1GenerateSpecRequest(SdkBaseModel):
    """Request for GenerateSpec."""

    observation_window: Optional[GoogleTypeInterval1ApigeeProjectsApi] = Field(default=UNSET, alias="observationWindow")
    """Required. The observation window. The server quantizes to day boundaries and caps the span at 90 days."""


class GoogleCloudApihubV1GenerateSpecRequestDict(TypedDict):
    observation_window: NotRequired[GoogleTypeInterval1ApigeeProjectsApiDict]
