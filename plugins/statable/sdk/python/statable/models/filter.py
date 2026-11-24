from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.field_model import FieldModelOrStr
from .enums.operator_statable_stats_api import OperatorStatableStatsApiOrStr


class Filter(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    field: FieldModelOrStr
    """Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region = ISO/subdivision
    codes, city = numeric geoname_id — the values geo breakdowns return). The ``event`` field filters by a custom event
    name (an ``event:name`` breakdown value) and restricts the whole query to that event's sessions; it accepts ONLY
    operator ``is`` with a single non-standard value (not ``pageview`` / ``engagement``) — other forms return
    ``invalid_filter``."""

    operator: OperatorStatableStatsApiOrStr
    values: list[str]
    """OR-ed together. A value may not contain a comma."""


class FilterDict(TypedDict):
    field: FieldModelOrStr
    operator: OperatorStatableStatsApiOrStr
    values: list[str]
