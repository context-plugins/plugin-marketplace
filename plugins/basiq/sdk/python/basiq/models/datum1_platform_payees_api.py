from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum1PlatformPayeesApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: Literal["resource-not-found"] = "resource-not-found"
    """Application-specific error code."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""


class Datum1PlatformPayeesApiDict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: Literal["resource-not-found"]
    detail: NotRequired[str]
