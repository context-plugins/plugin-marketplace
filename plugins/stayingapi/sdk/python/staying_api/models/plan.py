from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class Plan(SdkBaseModel):
    code: str
    """Plan code (free|starter|pro|scale|enterprise)."""

    name: str
    status: StatusOrStr
    """Subscription status."""


class PlanDict(TypedDict):
    code: str
    name: str
    status: StatusOrStr
