from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1OptimizedStatsNode(SdkBaseModel):
    """Encapsulates a data node as represented below: ```` { "identifier": { "names": [ "apiproxy" ], "values": [
    "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }```` or ```` {
    "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }```` Depending on whether a dimension is present in
    the query or not the data node type can be a simple metric value or dimension identifier with list of metrics."""

    data: Optional[list[Any]] = UNSET
    """List of data values."""


class GoogleCloudApigeeV1OptimizedStatsNodeDict(TypedDict):
    data: NotRequired[list[Any]]
