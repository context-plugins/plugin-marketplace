from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Binary(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    data: Optional[str] = UNSET


class BinaryDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    content_type: NotRequired[str]
    data: NotRequired[str]
