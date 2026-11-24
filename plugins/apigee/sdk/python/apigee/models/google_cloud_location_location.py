from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudLocationLocation(SdkBaseModel):
    """A resource that represents a Google Cloud location."""

    metadata: Optional[dict[str, Any]] = UNSET
    """Service-specific metadata. For example the available capacity at the given location."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The friendly name for this location, typically a nearby city name. For example, "Tokyo"."""

    name: Optional[str] = UNSET
    """Resource name for the location, which may vary between implementations. For example:
    ``"projects/example-project/locations/us-east1"``"""

    labels: Optional[dict[str, str]] = UNSET
    """Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}"""

    location_id: Optional[str] = Field(default=UNSET, alias="locationId")
    """The canonical id for this location. For example: ``"us-east1"``."""


class GoogleCloudLocationLocationDict(TypedDict):
    metadata: NotRequired[dict[str, Any]]
    display_name: NotRequired[str]
    name: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    location_id: NotRequired[str]
