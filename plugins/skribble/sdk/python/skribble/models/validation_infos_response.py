from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationInfosResponse(SdkBaseModel):
    indication: Optional[str] = UNSET
    sub_indication: Optional[str] = Field(default=UNSET, alias="subIndication")
    details: Optional[list[str]] = UNSET


class ValidationInfosResponseDict(TypedDict):
    indication: NotRequired[str]
    sub_indication: NotRequired[str]
    details: NotRequired[list[str]]
