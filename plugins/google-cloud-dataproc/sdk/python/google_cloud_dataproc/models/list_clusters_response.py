from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cluster import Cluster, ClusterDict


class ListClustersResponse(SdkBaseModel):
    """The list of all clusters in a project."""

    clusters: Optional[list[Cluster]] = UNSET
    """Output only. The clusters in the project."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Output only. This token is included in the response if there are more results to fetch. To fetch additional
    results, provide this value as the page_token in a subsequent ListClustersRequest."""


class ListClustersResponseDict(TypedDict):
    clusters: NotRequired[list[ClusterDict]]
    next_page_token: NotRequired[str]
