from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action import ActionOrStr


class QrcBulkUpdateRequest(SdkBaseModel):
    action: ActionOrStr
    """archive or edit_tags"""

    archive: Optional[bool] = UNSET
    add_tags: Optional[list[str]] = UNSET
    remove_tags: Optional[list[str]] = UNSET
    qr_code_ids: Optional[list[str]] = UNSET
    """this is limited to 100 QR code ids; Pages QR codes are not supported"""


class QrcBulkUpdateRequestDict(TypedDict):
    action: ActionOrStr
    archive: NotRequired[bool]
    add_tags: NotRequired[list[str]]
    remove_tags: NotRequired[list[str]]
    qr_code_ids: NotRequired[list[str]]
