from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_archbee_public_file_manager_api import StatusArchbeePublicFileManagerApiOrStr


class FileManagerFiles400Error1(SdkBaseModel):
    status: Optional[StatusArchbeePublicFileManagerApiOrStr] = UNSET
    """Response Status"""

    messages: Optional[list[str]] = UNSET
    """Array of messages"""


class FileManagerFiles400Error1Dict(TypedDict):
    status: NotRequired[StatusArchbeePublicFileManagerApiOrStr]
    messages: NotRequired[list[str]]
