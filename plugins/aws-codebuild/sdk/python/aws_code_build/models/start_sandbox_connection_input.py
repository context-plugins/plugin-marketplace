from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StartSandboxConnectionInput(SdkBaseModel):
    sandbox_id: str = Field(alias="sandboxId")
    """A sandboxId or sandboxArn."""


class StartSandboxConnectionInputDict(TypedDict):
    sandbox_id: str
