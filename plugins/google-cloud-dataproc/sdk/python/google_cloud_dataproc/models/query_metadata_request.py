from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueryMetadataRequest(SdkBaseModel):
    """Request message for DataprocMetastore.QueryMetadata."""

    query: Optional[str] = UNSET
    """Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the
    data."""


class QueryMetadataRequestDict(TypedDict):
    query: NotRequired[str]
