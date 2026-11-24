from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetStamp(SdkBaseModel):
    """Provenance of the slice that answered. ``version`` is the sync signal — poll it, re-pull when it moves."""

    source: Optional[str] = UNSET
    refresh: Optional[str] = UNSET
    polled: Optional[str] = UNSET
    """How often we LOOK for a new IRS release, as distinct from how often the IRS publishes one."""

    reporting_lag: Optional[str] = UNSET
    """Why a figure is dated to a fiscal year rather than to today."""

    basis: Optional[str] = UNSET
    """Grants PAID versus grants approved — the reconciliation that catches people comparing a total here to a funder's
    own published giving figure. Read it before filing a discrepancy."""

    version: Optional[str] = UNSET
    """Opaque build stamp of the data slice. Changes only when the data does."""

    generated_at: Optional[str] = UNSET
    """ISO 8601 timestamp the slice was built."""

    license: Optional[str] = UNSET
    """Licence the source data is published under, where it carries one. Absent for public-domain sources."""

    attribution: Optional[str] = UNSET
    """Attribution the source licence obliges you to reproduce. Present it verbatim wherever you show figures from this
    jurisdiction."""

    currency: Optional[str] = UNSET
    """Currency of every amount in the response, when it is not US dollars. Amounts are never converted — they are the
    filing's own figures."""


class DatasetStampDict(TypedDict):
    source: NotRequired[str]
    refresh: NotRequired[str]
    polled: NotRequired[str]
    reporting_lag: NotRequired[str]
    basis: NotRequired[str]
    version: NotRequired[str]
    generated_at: NotRequired[str]
    license: NotRequired[str]
    attribution: NotRequired[str]
    currency: NotRequired[str]
