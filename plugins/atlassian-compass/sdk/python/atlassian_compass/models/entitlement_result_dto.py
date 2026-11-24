from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntitlementResultDto(SdkBaseModel):
    class_: Optional[str] = Field(default=UNSET, alias="@class")


class EntitlementResultDtoDict(TypedDict):
    class_: NotRequired[str]
