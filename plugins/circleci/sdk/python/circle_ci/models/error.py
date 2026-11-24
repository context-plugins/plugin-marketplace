from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of error"""

    message: Optional[str] = UNSET
    """The error message"""


class ErrorDict(TypedDict):
    type_: NotRequired[str]
    message: NotRequired[str]
