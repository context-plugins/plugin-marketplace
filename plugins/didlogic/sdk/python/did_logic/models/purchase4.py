from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_didlogic_com_numbers_inventory_api import Status1DidlogicComNumbersInventoryApiOrStr


class Purchase4(SdkBaseModel):
    """Updated purchase details"""

    id: int
    """DID identifier"""

    number: str
    """Phone number"""

    country: str
    """Country name"""

    area: str
    """City/area name"""

    channels: int
    """Maximum simultaneous calls"""

    activation: float
    """One-time activation fee (USD)"""

    monthly_fee: float
    """Monthly recurring fee (USD)"""

    per_minute: float
    """Per-minute inbound call rate (USD)"""

    services: list[Any]
    """Enabled services for this number"""

    status: Status1DidlogicComNumbersInventoryApiOrStr
    """Number status"""

    destination_count: int
    """Number of configured routing destinations"""

    call_recording_enabled: bool
    """Whether inbound call recording is enabled for this DID"""

    commitment_months: Optional[int] = UNSET
    """Minimum service term in months (omitted when the commitment policy is disabled)"""

    identity_id: int
    """Associated identity ID"""


class Purchase4Dict(TypedDict):
    id: int
    number: str
    country: str
    area: str
    channels: int
    activation: float
    monthly_fee: float
    per_minute: float
    services: list[Any]
    status: Status1DidlogicComNumbersInventoryApiOrStr
    destination_count: int
    call_recording_enabled: bool
    commitment_months: NotRequired[int]
    identity_id: int
