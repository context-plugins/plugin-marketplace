from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1HmacRequest(SdkBaseModel):
    message: str
    """The message to sign"""

    secret: str
    """The secret key for HMAC generation"""

    algorithm: Optional[str] = UNSET
    """Hash algorithm to use"""

    encoding: Optional[str] = UNSET
    """Output encoding format"""


class V1HmacRequestDict(TypedDict):
    message: str
    secret: str
    algorithm: NotRequired[str]
    encoding: NotRequired[str]
