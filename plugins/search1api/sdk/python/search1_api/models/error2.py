from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error2(SdkBaseModel):
    message: Optional[str] = UNSET
    status_code: Optional[int] = Field(default=UNSET, alias="statusCode")


class Error2Dict(TypedDict):
    message: NotRequired[str]
    status_code: NotRequired[int]
