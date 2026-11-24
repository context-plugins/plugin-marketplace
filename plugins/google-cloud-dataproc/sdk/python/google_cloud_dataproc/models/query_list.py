from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueryList(SdkBaseModel):
    """A list of queries to run on a cluster."""

    queries: Optional[list[str]] = UNSET
    """Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries
    can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet
    that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2",
    "query3;query4", ] } }"""


class QueryListDict(TypedDict):
    queries: NotRequired[list[str]]
