from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConditionSetStats2(SdkBaseModel):
    """Subscriber count statistics for the condition set. Included when ``expand[]=stats`` is specified in the
    request."""

    active_subscriber_count: int
    """Count of active subscribers matching this condition set, calculated synchronously at request time."""


class ConditionSetStats2Dict(TypedDict):
    active_subscriber_count: int
