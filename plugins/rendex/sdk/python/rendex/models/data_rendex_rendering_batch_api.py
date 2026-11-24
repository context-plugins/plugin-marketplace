from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class DataRendexRenderingBatchApi(SdkBaseModel):
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    """Unique batch identifier for polling"""

    total_urls: Optional[int] = Field(default=UNSET, alias="totalUrls")
    """Number of URLs in the batch"""

    status: Optional[StatusOrStr] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")


class DataRendexRenderingBatchApiDict(TypedDict):
    batch_id: NotRequired[str]
    total_urls: NotRequired[int]
    status: NotRequired[StatusOrStr]
    created_at: NotRequired[RFC3339DateTime]
