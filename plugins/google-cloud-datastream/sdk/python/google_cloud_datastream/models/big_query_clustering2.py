from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BigQueryClustering2(SdkBaseModel):
    """BigQuery clustering rule."""

    columns: Optional[list[str]] = UNSET
    """Required. Column names to set as clustering columns."""


class BigQueryClustering2Dict(TypedDict):
    columns: NotRequired[list[str]]
