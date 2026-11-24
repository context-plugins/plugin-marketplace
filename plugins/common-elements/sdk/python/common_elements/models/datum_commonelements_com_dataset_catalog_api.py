from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatumCommonelementsComDatasetCatalogApi(SdkBaseModel):
    resource_key: Optional[str] = UNSET
    """Stable key. The ``source`` and path segment both derive from it."""

    display_name: Optional[str] = UNSET
    """Resource name, for display."""

    buyer_summary: Optional[str] = UNSET
    """What this resource gives you, in one sentence."""

    provenance_label: Optional[str] = UNSET
    """Where the underlying records come from."""

    min_tier: Optional[str] = UNSET
    """Plan required to read rows from this resource."""

    has_access: Optional[bool] = UNSET
    """Whether the key on this request can read its rows."""

    coverage_basis: Optional[str] = UNSET
    """What kind of coverage number this resource may be described with."""

    coverage_note: Optional[str] = UNSET
    """The caveat that says whether a zero means 'nothing happened' or 'not matched yet'."""


class DatumCommonelementsComDatasetCatalogApiDict(TypedDict):
    resource_key: NotRequired[str]
    display_name: NotRequired[str]
    buyer_summary: NotRequired[str]
    provenance_label: NotRequired[str]
    min_tier: NotRequired[str]
    has_access: NotRequired[bool]
    coverage_basis: NotRequired[str]
    coverage_note: NotRequired[str]
