from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spanner_schema import SpannerSchema, SpannerSchemaDict


class SpannerDatabase6(SdkBaseModel):
    """Spanner data source objects to avoid backfilling."""

    schemas: Optional[list[SpannerSchema]] = UNSET
    """Optional. Spanner schemas in the database."""


class SpannerDatabase6Dict(TypedDict):
    schemas: NotRequired[list[SpannerSchemaDict]]
