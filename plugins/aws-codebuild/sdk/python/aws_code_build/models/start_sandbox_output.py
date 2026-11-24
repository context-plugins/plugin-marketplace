from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sandbox import Sandbox, SandboxDict


class StartSandboxOutput(SdkBaseModel):
    sandbox: Optional[Sandbox] = UNSET


class StartSandboxOutputDict(TypedDict):
    sandbox: NotRequired[SandboxDict]
