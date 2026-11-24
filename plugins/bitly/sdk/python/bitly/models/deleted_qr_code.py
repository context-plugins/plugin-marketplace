from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeletedQrCode(SdkBaseModel):
    id: Optional[str] = UNSET


class DeletedQrCodeDict(TypedDict):
    id: NotRequired[str]
