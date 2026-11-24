from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code4 import Code4OrStr
from .source_connect_authentication_api import SourceConnectAuthenticationApi, SourceConnectAuthenticationApiDict


class Datum5(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: Code4OrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[SourceConnectAuthenticationApi] = UNSET
    """An object containing references to the source of the error."""


class Datum5Dict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: Code4OrStr
    detail: NotRequired[str]
    source: NotRequired[SourceConnectAuthenticationApiDict]
