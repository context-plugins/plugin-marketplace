from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .availability import Availability, AvailabilityDict
from .meta import Meta, MetaDict


class AvailabilityResponse(SdkBaseModel):
    data: list[Availability]
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class AvailabilityResponseDict(TypedDict):
    data: list[AvailabilityDict]
    meta: MetaDict
