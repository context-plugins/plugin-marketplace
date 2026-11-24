from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudflowV1Connections409Error(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    status: Optional[int] = UNSET
    code: Optional[str] = UNSET


class CloudflowV1Connections409ErrorDict(TypedDict):
    type_: NotRequired[str]
    title: NotRequired[str]
    status: NotRequired[int]
    code: NotRequired[str]
