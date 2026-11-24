from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sandbox import Sandbox, SandboxDict


class BatchGetSandboxesOutput(SdkBaseModel):
    sandboxes: Optional[list[Sandbox]] = UNSET
    """Information about the requested sandboxes."""

    sandboxes_not_found: Optional[list[str]] = Field(default=UNSET, alias="sandboxesNotFound")
    """The IDs of sandboxes for which information could not be found."""


class BatchGetSandboxesOutputDict(TypedDict):
    sandboxes: NotRequired[list[SandboxDict]]
    sandboxes_not_found: NotRequired[list[str]]
