from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..segment_subscription_input import SegmentSubscriptionInput, SegmentSubscriptionInputDict
from ..segment_subscription_input1 import SegmentSubscriptionInput1, SegmentSubscriptionInput1Dict
from ..segment_subscription_input2 import SegmentSubscriptionInput2, SegmentSubscriptionInput2Dict

SegmentSubscriptionInput3: TypeAlias = Annotated[
    (
        Annotated[SegmentSubscriptionInput, Tag("subscriptions")]
        | Annotated[SegmentSubscriptionInput1, Tag("emails")]
        | Annotated[SegmentSubscriptionInput2, Tag("custom_fields")]
    ),
    WireDiscriminator("type"),
]
"""Input for segment creation. Use ``subscriptions`` or ``emails`` to create a manual segment from explicit lists, or
``custom_fields`` to create a dynamic segment filtered by custom field values."""

SegmentSubscriptionInput3Dict: TypeAlias = (
    SegmentSubscriptionInputDict | SegmentSubscriptionInput1Dict | SegmentSubscriptionInput2Dict
)
