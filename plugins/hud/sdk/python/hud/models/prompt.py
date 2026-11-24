from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .icon import Icon, IconDict
from .prompt_argument import PromptArgument, PromptArgumentDict


class Prompt(SdkBaseModel):
    """A prompt or prompt template that the server offers."""

    name: str
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET
    arguments: Optional[list[PromptArgument]] = UNSET
    icons: Optional[list[Icon]] = UNSET
    meta: Optional[Any] = Field(default=UNSET, alias="_meta")


class PromptDict(TypedDict):
    name: str
    title: NotRequired[str]
    description: NotRequired[str]
    arguments: NotRequired[list[PromptArgumentDict]]
    icons: NotRequired[list[IconDict]]
    meta: NotRequired[Any]
