from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.behavior import BehaviorOrStr
from .integration import Integration, IntegrationDict


class HandlerConfig(SdkBaseModel):
    behavior: BehaviorOrStr
    """The behavior for the handler."""

    integration: Integration


class HandlerConfigDict(TypedDict):
    behavior: BehaviorOrStr
    integration: IntegrationDict
