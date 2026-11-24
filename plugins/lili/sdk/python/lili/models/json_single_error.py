from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JsonSingleError(SdkBaseModel):
    """A specific server error"""

    code: Optional[int] = UNSET
    """A unique numeric code representing the error"""

    code_name: Optional[str] = Field(default=UNSET, alias="codeName")
    """A unique string code representing the error"""

    message: Optional[str] = UNSET
    """Human readable description of the error"""

    localized_message: Optional[str] = Field(default=UNSET, alias="localizedMessage")
    """Human readable description of the error, localized"""


class JsonSingleErrorDict(TypedDict):
    code: NotRequired[int]
    code_name: NotRequired[str]
    message: NotRequired[str]
    localized_message: NotRequired[str]
