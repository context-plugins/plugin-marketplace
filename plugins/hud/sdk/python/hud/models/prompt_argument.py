from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PromptArgument(SdkBaseModel):
    """An argument for a prompt template."""

    name: str
    description: Optional[str] = UNSET
    required: Optional[bool] = UNSET


class PromptArgumentDict(TypedDict):
    name: str
    description: NotRequired[str]
    required: NotRequired[bool]
