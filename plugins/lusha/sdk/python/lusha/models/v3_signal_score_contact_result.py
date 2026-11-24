from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_item_error import V3ItemError, V3ItemErrorDict
from .v3_signal_score_contact_company_ref import V3SignalScoreContactCompanyRef, V3SignalScoreContactCompanyRefDict


class V3SignalScoreContactResult(SdkBaseModel):
    """A scored entry, or an error entry with NOT_FOUND / NO_SCORE instead of the score fields."""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    """Encrypted Lusha contact ID for scored entries. On NOT_FOUND, echoes the supplied id, if one was given."""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    company: Optional[V3SignalScoreContactCompanyRef] = UNSET
    """Company the contact was scored at."""

    signal_score: Optional[float] = Field(default=UNSET, alias="signalScore")
    """Aggregate signal score. Absent on error entries."""

    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Signal types currently active for this contact (canonical camelCase). Absent on error entries."""

    no_active_signals: Optional[bool] = Field(default=UNSET, alias="noActiveSignals")
    """True when the contact resolved and scored but has no active signals (signalScore is 0). Absent on error
    entries."""

    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""


class V3SignalScoreContactResultDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    full_name: NotRequired[str]
    company: NotRequired[V3SignalScoreContactCompanyRefDict]
    signal_score: NotRequired[float]
    signal_types: NotRequired[list[str]]
    no_active_signals: NotRequired[bool]
    error: NotRequired[V3ItemErrorDict]
