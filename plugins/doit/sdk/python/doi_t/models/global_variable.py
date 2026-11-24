from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GlobalVariable(SdkBaseModel):
    key: str
    name: str
    description: Optional[str] = UNSET
    type_: str = Field(alias="type")
    element_type: Optional[str] = Field(default=UNSET, alias="elementType")
    value: Optional[str] = UNSET
    """Present unless the export stripped variable values."""

    used_by_nodes: Optional[list[str]] = Field(default=UNSET, alias="usedByNodes")


class GlobalVariableDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    type_: str
    element_type: NotRequired[str]
    value: NotRequired[str]
    used_by_nodes: NotRequired[list[str]]
