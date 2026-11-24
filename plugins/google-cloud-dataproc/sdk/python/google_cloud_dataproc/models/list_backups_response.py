from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .backup import Backup, BackupDict


class ListBackupsResponse(SdkBaseModel):
    """Response message for DataprocMetastore.ListBackups."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    backups: Optional[list[Backup]] = UNSET
    """The backups of the specified service."""


class ListBackupsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
    backups: NotRequired[list[BackupDict]]
