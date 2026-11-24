from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .action import Action, ActionDict


class RequestGroup(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    intent: Optional[str] = UNSET
    subject: Optional[Any] = UNSET
    author: Optional[Any] = UNSET
    action: Optional[list[Action]] = UNSET


class RequestGroupDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    status: NotRequired[str]
    intent: NotRequired[str]
    subject: NotRequired[Any]
    author: NotRequired[Any]
    action: NotRequired[list[ActionDict]]
