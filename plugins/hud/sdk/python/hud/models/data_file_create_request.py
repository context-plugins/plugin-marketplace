from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import Scope, ScopeOrStr


class DataFileCreateRequest(SdkBaseModel):
    """A reservation for an upload the client is about to make."""

    filename: str
    size_bytes: int
    content_type: str = "application/octet-stream"
    scope: ScopeOrStr = Scope.MEMBER
    pipeline_key: Optional[str] = UNSET
    """Reserve the file as the input of this data pipeline, which may take a file larger than the data store's per-file
    limit"""


class DataFileCreateRequestDict(TypedDict):
    filename: str
    size_bytes: int
    content_type: NotRequired[str]
    scope: NotRequired[ScopeOrStr]
    pipeline_key: NotRequired[str]
