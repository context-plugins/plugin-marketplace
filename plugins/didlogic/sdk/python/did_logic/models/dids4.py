from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service import ServiceOrStr
from .enums.status_didlogic_com_numbers_inventory_api import StatusDidlogicComNumbersInventoryApiOrStr


class Dids4(SdkBaseModel):
    id: int
    """Unique DID identifier"""

    number: str
    """Phone number"""

    country: str
    """Country name where the number is located"""

    area: str
    """City or area name"""

    channels: int
    """Number of simultaneous call channels"""

    activation: float
    """One-time activation fee"""

    monthly_fee: float
    """Monthly recurring fee"""

    per_minute: float
    """Per-minute rate for incoming calls"""

    services: list[ServiceOrStr]
    """List of enabled services (e.g., sms)"""

    status: StatusDidlogicComNumbersInventoryApiOrStr
    """Current status of the number"""

    destination_count: int
    """Number of configured routing destinations"""

    call_recording_enabled: bool
    commitment_months: int
    """Minimum commitment period in months"""

    identity_id: int
    """Associated identity/document ID for verification"""


class Dids4Dict(TypedDict):
    id: int
    number: str
    country: str
    area: str
    channels: int
    activation: float
    monthly_fee: float
    per_minute: float
    services: list[ServiceOrStr]
    status: StatusDidlogicComNumbersInventoryApiOrStr
    destination_count: int
    call_recording_enabled: bool
    commitment_months: int
    identity_id: int
