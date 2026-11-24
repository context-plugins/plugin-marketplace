from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spanner_schema import SpannerSchema, SpannerSchemaDict


class SpannerDatabase(SdkBaseModel):
    """Spanner database structure."""

    schemas: Optional[list[SpannerSchema]] = UNSET
    """Optional. Spanner schemas in the database."""


class SpannerDatabaseDict(TypedDict):
    schemas: NotRequired[list[SpannerSchemaDict]]
