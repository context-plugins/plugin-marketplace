from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NfsFileShareDefaults(SdkBaseModel):
    file_mode: Optional[str] = Field(default=UNSET, alias="FileMode")
    """The Unix file mode in the form "nnnn". For example, 0666 represents the default file mode inside the file share.
    The default value is 0666."""

    directory_mode: Optional[str] = Field(default=UNSET, alias="DirectoryMode")
    """The Unix directory mode in the form "nnnn". For example, 0666 represents the default access mode for all
    directories inside the file share. The default value is 0777."""

    group_id: Optional[int] = Field(default=UNSET, alias="GroupId")
    """The default group ID for the file share (unless the files have another group ID specified). The default value is
    nfsnobody."""

    owner_id: Optional[int] = Field(default=UNSET, alias="OwnerId")
    """The default owner ID for files in the file share (unless the files have another owner ID specified). The default
    value is nfsnobody."""


class NfsFileShareDefaultsDict(TypedDict):
    file_mode: NotRequired[str]
    directory_mode: NotRequired[str]
    group_id: NotRequired[int]
    owner_id: NotRequired[int]
