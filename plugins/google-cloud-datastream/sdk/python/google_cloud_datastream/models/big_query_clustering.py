from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BigQueryClustering(SdkBaseModel):
    """BigQuery clustering configuration."""

    columns: Optional[list[str]] = UNSET
    """Required. Column names to set as clustering columns."""


class BigQueryClusteringDict(TypedDict):
    columns: NotRequired[list[str]]
