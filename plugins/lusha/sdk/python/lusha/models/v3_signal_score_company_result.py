from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_item_error import V3ItemError, V3ItemErrorDict


class V3SignalScoreCompanyResult(SdkBaseModel):
    """A scored entry, or an error entry with NOT_FOUND / NO_SCORE instead of the score fields."""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    """Encrypted Lusha company ID for scored entries. On NOT_FOUND, echoes the supplied domain/name (or the derived
    domain, for an email request)."""

    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    signal_score: Optional[float] = Field(default=UNSET, alias="signalScore")
    """Aggregate signal score - the fraction of the company's active signals. Absent on error entries."""

    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Signal types currently active for this company (canonical camelCase). Absent on error entries."""

    no_active_signals: Optional[bool] = Field(default=UNSET, alias="noActiveSignals")
    """True when the company resolved and scored but has no active signals (signalScore is 0). Absent on error
    entries."""

    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""


class V3SignalScoreCompanyResultDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    signal_score: NotRequired[float]
    signal_types: NotRequired[list[str]]
    no_active_signals: NotRequired[bool]
    error: NotRequired[V3ItemErrorDict]
