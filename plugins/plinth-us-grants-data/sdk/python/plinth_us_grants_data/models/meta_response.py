from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_stamp import DatasetStamp, DatasetStampDict
from .meta_scope import MetaScope, MetaScopeDict
from .x_plinth import XPlinth, XPlinthDict


class MetaResponse(SdkBaseModel):
    """What this deployment holds and how to reach it. Needs no key — start here."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    dataset: DatasetStamp
    """Provenance of the slice that answered. ``version`` is the sync signal — poll it, re-pull when it moves."""

    scope: MetaScope
    """Headline counts for the slice currently being served — the live figure any copy should track.

    ⚠️ THE TWO YEAR ENDS ARE DIFFERENT NUMBERS AND BOTH ARE PUBLISHED. ``last_fiscal_year`` is max(tax_year) — sync a
    mirrored copy against it. ``last_complete_fiscal_year`` is the newest year that has stopped filling, and it is the
    one prose should quote: the IRS lag means the corpus always carries a few hundred early filings for a barely-started
    year, so max(tax_year) reads a year or two ahead of the coverage anyone would recognise. Publishing only the first
    is what put /meta at FY2026 while every page on the site said FY2025 (2026-08 audit)."""

    trial: Optional[Any] = UNSET
    """How to get a key with no account, and what it may read."""

    compliance_sources: Optional[Any] = UNSET
    candid_compatibility: Optional[Any] = UNSET


class MetaResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    dataset: DatasetStampDict
    scope: MetaScopeDict
    trial: NotRequired[Any]
    compliance_sources: NotRequired[Any]
    candid_compatibility: NotRequired[Any]
