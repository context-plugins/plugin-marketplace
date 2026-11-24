from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sandbox import Sandbox, SandboxDict


class StopSandboxOutput(SdkBaseModel):
    sandbox: Optional[Sandbox] = UNSET


class StopSandboxOutputDict(TypedDict):
    sandbox: NotRequired[SandboxDict]
