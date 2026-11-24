from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_option import ServiceOption, ServiceOptionDict


class ServiceOptionsResponse(SdkBaseModel):
    service_options: Optional[list[ServiceOption]] = UNSET
    """Available service option time slots for the requested fulfillment type."""


class ServiceOptionsResponseDict(TypedDict):
    service_options: NotRequired[list[ServiceOptionDict]]
