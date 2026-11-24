from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RefreshCacheInput(SdkBaseModel):
    file_share_arn: str = Field(alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the file share you want to refresh."""

    folder_list: Optional[list[str]] = Field(default=UNSET, alias="FolderList")
    """A comma-separated list of the paths of folders to refresh in the cache. The default is ["/"]. The default
    refreshes objects and folders at the root of the Amazon S3 bucket. If Recursive is set to true, the entire S3 bucket
    that the file share has access to is refreshed. Do not include / when specifying folder names. For example, you
    would specify samplefolder rather than samplefolder/."""

    recursive: Optional[bool] = Field(default=UNSET, alias="Recursive")
    """A value that specifies whether to recursively refresh folders in the cache. The refresh includes folders that
    were in the cache the last time the gateway listed the folder's contents. If this value set to true, each folder
    that is listed in FolderList is recursively updated. Otherwise, subfolders listed in FolderList are not refreshed.
    Only objects that are in folders listed directly under FolderList are found and used for the update. The default is
    true. Valid Values: true | false"""


class RefreshCacheInputDict(TypedDict):
    file_share_arn: str
    folder_list: NotRequired[list[str]]
    recursive: NotRequired[bool]
