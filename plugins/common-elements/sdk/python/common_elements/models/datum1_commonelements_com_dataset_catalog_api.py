from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum1CommonelementsComDatasetCatalogApi(SdkBaseModel):
    resource_key: Optional[str] = UNSET
    """Resource this row describes."""

    record_count: Optional[float] = UNSET
    """Records held for this association in this resource."""

    sources_measured: Optional[float] = UNSET
    """How many of the resource's sources could be counted."""

    has_access: Optional[bool] = UNSET
    """Whether your key can read the rows behind the count."""

    coverage_note: Optional[str] = UNSET
    """Whether a zero here means 'nothing happened' or 'this jurisdiction is not matched yet'."""


class Datum1CommonelementsComDatasetCatalogApiDict(TypedDict):
    resource_key: NotRequired[str]
    record_count: NotRequired[float]
    sources_measured: NotRequired[float]
    has_access: NotRequired[bool]
    coverage_note: NotRequired[str]
