from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code1_connect_jobs_api import Code1ConnectJobsApiOrStr
from .source_connect_authentication_api import SourceConnectAuthenticationApi, SourceConnectAuthenticationApiDict


class DatumConnectJobsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: Code1ConnectJobsApiOrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[SourceConnectAuthenticationApi] = UNSET
    """An object containing references to the source of the error."""


class DatumConnectJobsApiDict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: Code1ConnectJobsApiOrStr
    detail: NotRequired[str]
    source: NotRequired[SourceConnectAuthenticationApiDict]
