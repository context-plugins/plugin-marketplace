from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code1_platform_auth_links_api import Code1PlatformAuthLinksApiOrStr


class Datum2PlatformConnectorsApi(SdkBaseModel):
    code: Code1PlatformAuthLinksApiOrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    title: Optional[str] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """


class Datum2PlatformConnectorsApiDict(TypedDict):
    code: Code1PlatformAuthLinksApiOrStr
    detail: NotRequired[str]
    title: NotRequired[str]
    type_: str
