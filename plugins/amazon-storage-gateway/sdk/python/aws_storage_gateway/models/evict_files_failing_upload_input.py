from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EvictFilesFailingUploadInput(SdkBaseModel):
    file_share_arn: str = Field(alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the file share for which you want to start the cache clean operation."""

    force_remove: Optional[bool] = Field(default=UNSET, alias="ForceRemove")
    """Specifies whether cache entries with full or partial file data currently stored on the gateway will be forcibly
    removed by the cache clean operation. Valid arguments: False - The cache clean operation skips cache entries failing
    upload if they are associated with data currently stored on the gateway. This preserves the cached data. True - The
    cache clean operation removes cache entries failing upload even if they are associated with data currently stored on
    the gateway. This deletes the cached data. If ForceRemove is set to True, the cache clean operation will delete file
    data from the gateway"""


class EvictFilesFailingUploadInputDict(TypedDict):
    file_share_arn: str
    force_remove: NotRequired[bool]
