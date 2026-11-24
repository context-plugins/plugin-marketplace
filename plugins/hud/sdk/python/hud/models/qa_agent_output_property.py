from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QaAgentOutputProperty(SdkBaseModel):
    name: str
    type_: str = Field(alias="type")
    description: Optional[str] = UNSET
    enum_values: Optional[list[str]] = UNSET


class QaAgentOutputPropertyDict(TypedDict):
    name: str
    type_: str
    description: NotRequired[str]
    enum_values: NotRequired[list[str]]
