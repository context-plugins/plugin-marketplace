from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .meta import Meta, MetaDict
from .query_echo import QueryEcho, QueryEchoDict
from .result_row import ResultRow, ResultRowDict


class QueryResponse(SdkBaseModel):
    results: list[ResultRow]
    meta: Optional[Meta] = UNSET
    """Present only on breakdown responses."""

    query: QueryEcho
    """Echo of the resolved request."""

    has_import: Optional[bool] = UNSET
    """True when the site has imported (e.g. GA4) data overlapping the queried window."""


class QueryResponseDict(TypedDict):
    results: list[ResultRowDict]
    meta: NotRequired[MetaDict]
    query: QueryEchoDict
    has_import: NotRequired[bool]
