from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RelatedIoc(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    value: Optional[str] = UNSET
    confidence: Optional[float] = UNSET


class RelatedIocDict(TypedDict):
    type_: NotRequired[str]
    value: NotRequired[str]
    confidence: NotRequired[float]
