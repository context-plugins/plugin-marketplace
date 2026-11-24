from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrCodeLogoPublic(SdkBaseModel):
    image_guid: Optional[str] = UNSET
    """A GUID for an image uploaded to Bitly"""


class QrCodeLogoPublicDict(TypedDict):
    image_guid: NotRequired[str]
