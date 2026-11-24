from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisputeAttachmentUpload(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique ID of attachment"""


class DisputeAttachmentUploadDict(TypedDict):
    id: NotRequired[UUID]
