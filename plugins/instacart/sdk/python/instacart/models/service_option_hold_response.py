from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .service_option import ServiceOption, ServiceOptionDict


class ServiceOptionHoldResponse(SdkBaseModel):
    hold_id: Optional[str] = UNSET
    """The unique identifier for the time slot hold."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    """The time at which the hold expires and the time slot is released."""

    service_option: Optional[ServiceOption] = UNSET


class ServiceOptionHoldResponseDict(TypedDict):
    hold_id: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
    service_option: NotRequired[ServiceOptionDict]
