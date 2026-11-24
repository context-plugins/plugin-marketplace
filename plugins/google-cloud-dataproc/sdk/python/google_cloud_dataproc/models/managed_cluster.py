from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cluster_config3 import ClusterConfig3, ClusterConfig3Dict


class ManagedCluster(SdkBaseModel):
    """Cluster that is managed by the workflow."""

    labels: Optional[dict[str, str]] = UNSET
    r"""Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and
    must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63
    characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32
    labels can be associated with a given cluster."""

    cluster_name: Optional[str] = Field(default=UNSET, alias="clusterName")
    """Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name
    must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin
    or end with hyphen. Must consist of between 2 and 35 characters."""

    config: Optional[ClusterConfig3] = UNSET
    """Required. The cluster configuration."""


class ManagedClusterDict(TypedDict):
    labels: NotRequired[dict[str, str]]
    cluster_name: NotRequired[str]
    config: NotRequired[ClusterConfig3Dict]
