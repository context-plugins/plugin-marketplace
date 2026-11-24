from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.error_code import ErrorCodeOrStr
from .enums.status2 import Status2OrStr


class Log(SdkBaseModel):
    id: int
    """Log identifier"""

    number: str
    """Phone number that was checked"""

    status: Status2OrStr
    """Lookup status"""

    phone_type: str
    """Line type (e.g. mobile, fixed)"""

    carrier: str
    """Carrier / operator name"""

    mcc: str
    """Mobile Country Code"""

    mnc: str
    """Mobile Network Code"""

    ported: bool
    """Whether the number was ported"""

    risky: bool
    """Whether the destination is flagged risky"""

    country: str
    """Country"""

    task_id: int
    """Parent task identifier"""

    processed_at: str
    """Processing completion timestamp"""

    created_at: str
    """Log creation timestamp"""

    valid: bool
    """Whether the number is valid"""

    price: str
    """Client price charged for this lookup (USD)"""

    error_code: ErrorCodeOrStr | None
    """Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone number length or
    format, 199 — Unexpected error. null when no result is available yet."""


class LogDict(TypedDict):
    id: int
    number: str
    status: Status2OrStr
    phone_type: str
    carrier: str
    mcc: str
    mnc: str
    ported: bool
    risky: bool
    country: str
    task_id: int
    processed_at: str
    created_at: str
    valid: bool
    price: str
    error_code: ErrorCodeOrStr | None
