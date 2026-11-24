from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CacheAttributes(SdkBaseModel):
    cache_stale_timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="CacheStaleTimeoutInSeconds")
    """Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of time since the last refresh
    after which access to the directory would cause the file gateway to first refresh that directory's contents from the
    Amazon S3 bucket or Amazon FSx file system. The TTL duration is in seconds. Valid Values:0, 300 to 2,592,000 seconds
    (5 minutes to 30 days)"""


class CacheAttributesDict(TypedDict):
    cache_stale_timeout_in_seconds: NotRequired[int]
