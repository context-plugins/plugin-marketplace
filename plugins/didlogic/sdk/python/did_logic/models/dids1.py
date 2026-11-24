from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .required_document import RequiredDocument, RequiredDocumentDict


class Dids1(SdkBaseModel):
    id: int
    """DID identifier"""

    country: str
    """Country name"""

    city: str
    """City name"""

    sms_enabled: bool
    """Whether SMS is available for this number"""

    no_local_cli: bool
    """Whether number does not support local caller ID"""

    channels: int
    """Maximum simultaneous calls"""

    free_min: int
    """Free minutes included per month"""

    cnam: bool
    """Caller Name (CNAM) support"""

    commitment_months: int
    """Minimum service term in months"""

    required_documents: list[RequiredDocument]
    """List of required documents for this number"""

    activation: float
    """One-time activation fee (USD)"""

    monthly: float
    """Monthly recurring fee (USD)"""

    per_minute: float
    """Per-minute inbound call rate (USD)"""

    origination_per_min: float
    """Per-minute origination rate (USD)"""

    state: str
    """State name (if applicable)"""

    country_short_name: str
    """ISO country code"""

    number: str
    """Phone number"""

    never_sold: int
    """Whether number has never been sold before (1=yes, 0=no)"""

    call_recording_enabled: bool


class Dids1Dict(TypedDict):
    id: int
    country: str
    city: str
    sms_enabled: bool
    no_local_cli: bool
    channels: int
    free_min: int
    cnam: bool
    commitment_months: int
    required_documents: list[RequiredDocumentDict]
    activation: float
    monthly: float
    per_minute: float
    origination_per_min: float
    state: str
    country_short_name: str
    number: str
    never_sold: int
    call_recording_enabled: bool
