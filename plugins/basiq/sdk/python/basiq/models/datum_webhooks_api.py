from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_connect_authentication_api import SourceConnectAuthenticationApi, SourceConnectAuthenticationApiDict


class DatumWebhooksApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of the response, always "error"."""

    code: Optional[str] = UNSET
    """Application-specific error code, expressed as a string value."""

    title: Optional[str] = UNSET
    """Title of the error."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[SourceConnectAuthenticationApi] = UNSET
    """An object containing references to the source of the error."""


class DatumWebhooksApiDict(TypedDict):
    type_: NotRequired[str]
    code: NotRequired[str]
    title: NotRequired[str]
    detail: NotRequired[str]
    source: NotRequired[SourceConnectAuthenticationApiDict]
