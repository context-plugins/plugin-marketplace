from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartSandboxInput(SdkBaseModel):
    project_name: Optional[str] = Field(default=UNSET, alias="projectName")
    """The CodeBuild project name."""

    idempotency_token: Optional[str] = Field(default=UNSET, alias="idempotencyToken")
    """A unique client token."""


class StartSandboxInputDict(TypedDict):
    project_name: NotRequired[str]
    idempotency_token: NotRequired[str]
