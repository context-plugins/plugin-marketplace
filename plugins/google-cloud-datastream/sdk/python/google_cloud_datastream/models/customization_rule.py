from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .big_query_clustering2 import BigQueryClustering2, BigQueryClustering2Dict
from .big_query_partitioning2 import BigQueryPartitioning2, BigQueryPartitioning2Dict


class CustomizationRule(SdkBaseModel):
    """A customization rule to apply to a set of objects."""

    bigquery_partitioning: Optional[BigQueryPartitioning2] = Field(default=UNSET, alias="bigqueryPartitioning")
    """BigQuery partitioning rule."""

    bigquery_clustering: Optional[BigQueryClustering2] = Field(default=UNSET, alias="bigqueryClustering")
    """BigQuery clustering rule."""


class CustomizationRuleDict(TypedDict):
    bigquery_partitioning: NotRequired[BigQueryPartitioning2Dict]
    bigquery_clustering: NotRequired[BigQueryClustering2Dict]
