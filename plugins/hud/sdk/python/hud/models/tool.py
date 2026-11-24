from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .icon import Icon, IconDict
from .tool_annotations import ToolAnnotations, ToolAnnotationsDict
from .tool_execution import ToolExecution, ToolExecutionDict


class Tool(SdkBaseModel):
    """Definition for a tool the client can call."""

    name: str
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET
    input_schema: Any = Field(alias="inputSchema")
    output_schema: Optional[Any] = Field(default=UNSET, alias="outputSchema")
    icons: Optional[list[Icon]] = UNSET
    annotations: Optional[ToolAnnotations] = UNSET
    meta: Optional[Any] = Field(default=UNSET, alias="_meta")
    execution: Optional[ToolExecution] = UNSET


class ToolDict(TypedDict):
    name: str
    title: NotRequired[str]
    description: NotRequired[str]
    input_schema: Any
    output_schema: NotRequired[Any]
    icons: NotRequired[list[IconDict]]
    annotations: NotRequired[ToolAnnotationsDict]
    meta: NotRequired[Any]
    execution: NotRequired[ToolExecutionDict]
