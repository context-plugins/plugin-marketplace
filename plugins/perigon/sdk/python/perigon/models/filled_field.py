from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.method_perigon_monitors_api import MethodPerigonMonitorsApiOrStr
from .enums.source1 import Source1OrStr
from .source import Source, SourceDict


class FilledField(SdkBaseModel):
    """Event fields populated by enrichment and the sources used for each field."""

    field: str
    """Name of the event data field populated by enrichment."""

    method: MethodPerigonMonitorsApiOrStr
    """Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH."""

    source: Source1OrStr
    """How enrichment was initiated. Accepts MANUAL or BACKGROUND."""

    sources: OptionalNullable[list[Source]] = UNSET
    """Sources used to populate the field."""


class FilledFieldDict(TypedDict):
    field: str
    method: MethodPerigonMonitorsApiOrStr
    source: Source1OrStr
    sources: NotRequired[list[SourceDict] | None]
