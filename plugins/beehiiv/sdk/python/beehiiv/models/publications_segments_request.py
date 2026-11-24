from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.segment_subscription_input3 import SegmentSubscriptionInput3, SegmentSubscriptionInput3Dict


class PublicationsSegmentsRequest(SdkBaseModel):
    name: str
    """A unique name for the segment that does not already exist in the publication."""

    input: SegmentSubscriptionInput3
    """Input for segment creation. Use ``subscriptions`` or ``emails`` to create a manual segment from explicit lists,
    or ``custom_fields`` to create a dynamic segment filtered by custom field values."""


class PublicationsSegmentsRequestDict(TypedDict):
    name: str
    input: SegmentSubscriptionInput3Dict
