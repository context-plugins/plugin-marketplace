from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClusterSelector(SdkBaseModel):
    """A selector that chooses target cluster for jobs based on metadata."""

    zone: Optional[str] = UNSET
    """Optional. The zone where workflow process executes. This parameter does not affect the selection of the
    cluster.If unspecified, the zone of the first cluster matching the selector is used."""

    cluster_labels: Optional[dict[str, str]] = Field(default=UNSET, alias="clusterLabels")
    """Required. The cluster labels. Cluster must have all labels to match."""


class ClusterSelectorDict(TypedDict):
    zone: NotRequired[str]
    cluster_labels: NotRequired[dict[str, str]]
