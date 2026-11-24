from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spanner_schema import SpannerSchema, SpannerSchemaDict


class SpannerDatabase2(SdkBaseModel):
    """Optional. Spanner database to enrich with child data objects and metadata."""

    schemas: Optional[list[SpannerSchema]] = UNSET
    """Optional. Spanner schemas in the database."""


class SpannerDatabase2Dict(TypedDict):
    schemas: NotRequired[list[SpannerSchemaDict]]
