from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action import ActionOrStr


class BulkUpdateRequest(SdkBaseModel):
    action: ActionOrStr
    """archive or edit_tags"""

    archive: Optional[bool] = UNSET
    add_tags: Optional[list[str]] = UNSET
    remove_tags: Optional[list[str]] = UNSET
    links: Optional[list[str]] = UNSET
    """this is limited to 100 bitlink ids"""


class BulkUpdateRequestDict(TypedDict):
    action: ActionOrStr
    archive: NotRequired[bool]
    add_tags: NotRequired[list[str]]
    remove_tags: NotRequired[list[str]]
    links: NotRequired[list[str]]
