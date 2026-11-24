from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1OracleSemanticCacheRequest(SdkBaseModel):
    resource_id: Optional[str] = UNSET


class V1OracleSemanticCacheRequestDict(TypedDict):
    resource_id: NotRequired[str]
