from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EssentialsSearch(SdkBaseModel):
    """Candid Essentials v4 speaks POST-with-a-body, and that is the shape a migrating client already builds.
    ``search_terms``, ``from``, ``size``, ``filters`` and ``sort`` therefore keep their Candid names and meanings; the
    FILTER VOCABULARY inside ``filters`` is ours, because Candid's is built on PCS and on profile data we do not hold
    (see config/candid-compat.json → essentialsFilters).

    ``filters`` is a free-form object rather than a nested model on purpose: an unknown filter key is REPORTED in
    x_plinth.warnings, and a strict schema would instead 422 the whole request and tell the caller nothing about which
    of their filters we understood."""

    search_terms: Optional[str] = UNSET
    """Organization name or keyword."""

    from_: Optional[int] = Field(default=UNSET, alias="from")
    """0-based offset, as Candid."""

    size: Optional[int] = UNSET
    """Page size. Default 25, capped at 1000 (Candid's ceiling is 25)."""

    mode: Optional[str] = UNSET
    """text (default) | semantic. ``semantic`` matches on mission meaning rather than name, where the embedding store is
    staged."""

    filters: Optional[Any] = UNSET
    """See the Essentials filter matrix. Unknown keys are reported, not ignored."""

    sort: Optional[str] = UNSET
    """{"field": "total_revenue", "order": "desc"} — or the field name alone. Sortable: total_revenue, total_expenses,
    net_assets, grants_paid, name."""

    strict: Optional[bool] = UNSET
    """Reject the request if any filter could not be honored."""


class EssentialsSearchDict(TypedDict):
    search_terms: NotRequired[str]
    from_: NotRequired[int]
    size: NotRequired[int]
    mode: NotRequired[str]
    filters: NotRequired[Any]
    sort: NotRequired[str]
    strict: NotRequired[bool]
