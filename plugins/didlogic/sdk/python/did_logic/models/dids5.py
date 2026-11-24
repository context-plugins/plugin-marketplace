from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Dids5(SdkBaseModel):
    id: int
    """DID identifier"""

    number: str
    """Phone number"""

    sms_enabled: bool
    """Whether SMS is enabled"""

    no_local_cli: bool
    """Whether local caller ID is disabled"""

    channels: int
    """Maximum simultaneous calls"""

    country: str
    """Country name"""

    area: str
    """City/area name"""

    free_minutes: int
    """Free minutes included per month"""

    codec: Any
    """Audio codec"""

    require_docs: str
    """Comma-separated list of required document type IDs: 1 - Personal ID, 2 - Proof of Address, 3 - Proof of Local
    Address, 4 - Business Registration, 5 - Local Business Registration, 6 - Letter of Intent"""

    commitment_months: int
    """Minimum service term in months"""

    never_sold: int
    """Whether number has never been sold before (1=yes, 0=no)"""

    activation: float
    """One-time activation fee (USD)"""

    monthly_fee: float
    """Monthly recurring fee (USD)"""

    per_minute: float
    """Per-minute inbound call rate (USD)"""

    origination_per_min: float
    """Per-minute origination rate (USD)"""


class Dids5Dict(TypedDict):
    id: int
    number: str
    sms_enabled: bool
    no_local_cli: bool
    channels: int
    country: str
    area: str
    free_minutes: int
    codec: Any
    require_docs: str
    commitment_months: int
    never_sold: int
    activation: float
    monthly_fee: float
    per_minute: float
    origination_per_min: float
