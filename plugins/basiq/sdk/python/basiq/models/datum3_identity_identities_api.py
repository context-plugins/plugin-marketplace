from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum3IdentityIdentitiesApi(SdkBaseModel):
    code: Literal["internal-server-error"] = "internal-server-error"
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    title: Optional[str] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """


class Datum3IdentityIdentitiesApiDict(TypedDict):
    code: Literal["internal-server-error"]
    detail: NotRequired[str]
    title: NotRequired[str]
    type_: str
