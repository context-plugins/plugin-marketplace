from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BulkUpdate(SdkBaseModel):
    links: Optional[list[str]] = UNSET


class BulkUpdateDict(TypedDict):
    links: NotRequired[list[str]]
