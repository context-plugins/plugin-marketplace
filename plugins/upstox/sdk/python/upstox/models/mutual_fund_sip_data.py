from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MutualFundSipData(SdkBaseModel):
    fund: Optional[str] = UNSET
    """Display name of the fund."""

    status: Optional[str] = UNSET
    """ACTIVE, PAUSED, or CANCELLED."""

    created: Optional[str] = UNSET
    """Timestamp when the SIP was registered."""

    frequency: Optional[str] = UNSET
    """Frequency (e.g. monthly, weekly)."""

    instalments: Optional[int] = UNSET
    """Total number of instalments when applicable; -1 if open-ended."""

    sip_id: Optional[str] = UNSET
    """Unique SIP identifier."""

    sip_reg_number: Optional[str] = UNSET
    """SIP registration number when available."""

    instrument_key: Optional[str] = UNSET
    """ISIN of the fund, when available."""

    dividend_type: Optional[str] = UNSET
    """Dividend option when available (e.g. growth, idcw)."""

    transaction_type: Optional[str] = UNSET
    """BUY or SELL."""

    next_instalment: Optional[str] = UNSET
    """Next instalment date."""

    instalment_amount: Optional[float] = UNSET
    """Amount per instalment."""

    last_instalment: Optional[str] = UNSET
    """Last triggered instalment timestamp."""

    pending_instalments: Optional[int] = UNSET
    """Pending instalments when applicable."""

    instalment_day: Optional[int] = UNSET
    """Day of month for monthly SIPs when applicable."""

    completed_instalments: Optional[int] = UNSET
    """Completed instalment count when available."""

    trigger_price: Optional[float] = UNSET
    """Trigger price when applicable."""

    sip_type: Optional[str] = UNSET
    """SIP channel/type (e.g. sip, amc_sip)."""


class MutualFundSipDataDict(TypedDict):
    fund: NotRequired[str]
    status: NotRequired[str]
    created: NotRequired[str]
    frequency: NotRequired[str]
    instalments: NotRequired[int]
    sip_id: NotRequired[str]
    sip_reg_number: NotRequired[str]
    instrument_key: NotRequired[str]
    dividend_type: NotRequired[str]
    transaction_type: NotRequired[str]
    next_instalment: NotRequired[str]
    instalment_amount: NotRequired[float]
    last_instalment: NotRequired[str]
    pending_instalments: NotRequired[int]
    instalment_day: NotRequired[int]
    completed_instalments: NotRequired[int]
    trigger_price: NotRequired[float]
    sip_type: NotRequired[str]
