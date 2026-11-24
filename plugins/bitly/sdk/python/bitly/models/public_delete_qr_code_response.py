from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deleted_link import DeletedLink, DeletedLinkDict
from .deleted_qr_code import DeletedQrCode, DeletedQrCodeDict


class PublicDeleteQrCodeResponse(SdkBaseModel):
    """QR Code delete response"""

    qrcodes_deleted: Optional[list[DeletedQrCode]] = UNSET
    links_deleted: Optional[list[DeletedLink]] = UNSET


class PublicDeleteQrCodeResponseDict(TypedDict):
    qrcodes_deleted: NotRequired[list[DeletedQrCodeDict]]
    links_deleted: NotRequired[list[DeletedLinkDict]]
