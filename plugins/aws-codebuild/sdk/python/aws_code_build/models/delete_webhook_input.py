from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteWebhookInput(SdkBaseModel):
    project_name: str = Field(alias="projectName")
    """The name of the CodeBuild project."""


class DeleteWebhookInputDict(TypedDict):
    project_name: str
