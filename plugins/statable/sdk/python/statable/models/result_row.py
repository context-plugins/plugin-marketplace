from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compare import Compare, CompareDict


class ResultRow(SdkBaseModel):
    dimensions: Optional[dict[str, str]] = UNSET
    """Absent for aggregate queries. Keyed by the requested dimension string. For geo breakdowns the value is the
    round-trip code (visit:country → ISO alpha-2, visit:region → subdivision code, visit:city → numeric geoname_id) —
    exactly what the matching filter accepts."""

    labels: Optional[dict[str, str]] = UNSET
    """Present only on geo breakdowns — the human-readable display name for the code in ``dimensions``, keyed by the
    same dimension."""

    metrics: Optional[dict[str, float]] = UNSET
    """The requested metrics for this row."""

    compare: Optional[dict[str, Compare]] = UNSET
    """Present only when the request set ``compare``. Keyed by metric → {value, change}: the metric's value in the
    compare window and the percent change vs it. Not emitted on event:status_code / event:goal."""


class ResultRowDict(TypedDict):
    dimensions: NotRequired[dict[str, str]]
    labels: NotRequired[dict[str, str]]
    metrics: NotRequired[dict[str, float]]
    compare: NotRequired[dict[str, CompareDict]]
