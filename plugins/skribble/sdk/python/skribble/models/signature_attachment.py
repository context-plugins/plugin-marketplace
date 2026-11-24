from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignatureAttachment(SdkBaseModel):
    attachment_id: Optional[UUID] = UNSET
    filename: Optional[str] = UNSET


class SignatureAttachmentDict(TypedDict):
    attachment_id: NotRequired[UUID]
    filename: NotRequired[str]
