from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineCommand(SdkBaseModel):
    """An executable pipeline command."""

    name: Optional[str] = UNSET
    """The name of the command."""

    command: Optional[str] = UNSET
    """The executable command."""


class PipelineCommandDict(TypedDict):
    name: NotRequired[str]
    command: NotRequired[str]
