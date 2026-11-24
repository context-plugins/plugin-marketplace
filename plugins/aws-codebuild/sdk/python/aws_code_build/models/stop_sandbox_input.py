from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopSandboxInput(SdkBaseModel):
    id: str
    """Information about the requested sandbox ID."""


class StopSandboxInputDict(TypedDict):
    id: str
