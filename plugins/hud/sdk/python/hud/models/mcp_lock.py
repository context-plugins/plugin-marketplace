from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.transport import Transport, TransportOrStr
from .prompt import Prompt, PromptDict
from .resource import Resource, ResourceDict
from .tool import Tool, ToolDict


class McpLock(SdkBaseModel):
    tools: Optional[list[Tool]] = UNSET
    prompts: Optional[list[Prompt]] = UNSET
    resources: Optional[list[Resource]] = UNSET
    transport: TransportOrStr = Transport.HTTP


class McpLockDict(TypedDict):
    tools: NotRequired[list[ToolDict]]
    prompts: NotRequired[list[PromptDict]]
    resources: NotRequired[list[ResourceDict]]
    transport: NotRequired[TransportOrStr]
