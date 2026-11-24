from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScenarioArgument(SdkBaseModel):
    name: str
    required: bool = False
    description: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    default: Optional[Any] = UNSET
    input_schema: Optional[Any] = Field(default=UNSET, alias="inputSchema")


class ScenarioArgumentDict(TypedDict):
    name: str
    required: NotRequired[bool]
    description: NotRequired[str]
    type_: NotRequired[str]
    default: NotRequired[Any]
    input_schema: NotRequired[Any]
