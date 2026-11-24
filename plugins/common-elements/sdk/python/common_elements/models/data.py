from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data(SdkBaseModel):
    sirs: Optional[Any] = UNSET
    """Structural Integrity Reserve Study filings: on_file, project_count, and the projects array."""

    milestone: Optional[Any] = UNSET
    """County recertification roll: status and due of the record with the latest due date, record_count, and every
    records row so you can apply your own rule."""

    elevators: Optional[Any] = UNSET
    """count, delinquent, delinquent_count, earliest_expiry, max_landings, and the certificates array from the FL DBPR
    elevator safety roll."""

    pools: Optional[Any] = UNSET
    """inspection_count, last_inspection_date, last_result, last_violations, and the inspections array from FL DOH."""

    structure: Optional[Any] = UNSET
    """max_stories, max_building_height_ft, earliest_year_built, three_plus_story_building (null when no characteristics
    row exists, not false), and the buildings array."""

    fha: Optional[Any] = UNSET
    """project_count, status, status_date, expiration_date, approval_method, and the projects array."""

    layer_counts: Optional[Any] = UNSET
    """Row count per layer: sirs, recertifications, elevators, pool_inspections, characteristics, fha_projects."""

    has_data: Optional[bool] = UNSET
    """False when every layer is empty for this association."""

    source: Optional[str] = UNSET
    """The public-record sources behind this response."""


class DataDict(TypedDict):
    sirs: NotRequired[Any]
    milestone: NotRequired[Any]
    elevators: NotRequired[Any]
    pools: NotRequired[Any]
    structure: NotRequired[Any]
    fha: NotRequired[Any]
    layer_counts: NotRequired[Any]
    has_data: NotRequired[bool]
    source: NotRequired[str]
