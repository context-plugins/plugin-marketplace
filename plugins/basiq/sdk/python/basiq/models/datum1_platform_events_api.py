from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr
from .source_connect_authentication_api import SourceConnectAuthenticationApi, SourceConnectAuthenticationApiDict


class Datum1PlatformEventsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: CodeOrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[SourceConnectAuthenticationApi] = UNSET
    """An object containing references to the source of the error."""


class Datum1PlatformEventsApiDict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: CodeOrStr
    detail: NotRequired[str]
    source: NotRequired[SourceConnectAuthenticationApiDict]
