from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1GrailedSold400Error1(SdkBaseModel):
    code: Optional[str] = UNSET
    error: Optional[str] = UNSET
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")


class V1GrailedSold400Error1Dict(TypedDict):
    code: NotRequired[str]
    error: NotRequired[str]
    request_id: NotRequired[str]
