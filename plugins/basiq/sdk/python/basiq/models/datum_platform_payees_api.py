from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code_platform_payees_api import CodePlatformPayeesApiOrStr
from .source_platform_payees_api import SourcePlatformPayeesApi, SourcePlatformPayeesApiDict


class DatumPlatformPayeesApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: CodePlatformPayeesApiOrStr
    """Application-specific error code."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[SourcePlatformPayeesApi] = UNSET


class DatumPlatformPayeesApiDict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: CodePlatformPayeesApiOrStr
    detail: NotRequired[str]
    source: NotRequired[SourcePlatformPayeesApiDict]
