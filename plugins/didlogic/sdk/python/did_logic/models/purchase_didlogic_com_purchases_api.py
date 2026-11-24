from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PurchaseDidlogicComPurchasesApi(SdkBaseModel):
    number: str
    """DID phone number"""

    channels: int
    """Number of channels"""

    country: str
    """DID country"""

    area: str
    """DID area"""

    codec: Any
    """Audio codec"""

    check_state: str
    """DID status"""

    free_minutes: int
    """Free minutes included"""

    activation: float
    """Activation fee"""

    monthly_fee: float
    """Monthly cost for the DID"""

    per_minute: float
    """Per minute rate"""


class PurchaseDidlogicComPurchasesApiDict(TypedDict):
    number: str
    channels: int
    country: str
    area: str
    codec: Any
    check_state: str
    free_minutes: int
    activation: float
    monthly_fee: float
    per_minute: float
