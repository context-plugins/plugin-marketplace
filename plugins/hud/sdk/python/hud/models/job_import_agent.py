from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobImportAgent(SdkBaseModel):
    """The agent that did an imported run."""

    name: str
    version: Optional[str] = UNSET


class JobImportAgentDict(TypedDict):
    name: str
    version: NotRequired[str]
