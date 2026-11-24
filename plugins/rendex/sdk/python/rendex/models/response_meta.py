from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ResponseMeta(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique request identifier"""

    timestamp: Optional[RFC3339DateTime] = UNSET


class ResponseMetaDict(TypedDict):
    request_id: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
