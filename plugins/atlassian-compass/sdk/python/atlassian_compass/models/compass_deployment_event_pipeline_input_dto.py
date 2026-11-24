from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompassDeploymentEventPipelineInputDto(SdkBaseModel):
    """The deployment event pipeline."""

    pipeline_id: str = Field(alias="pipelineId")
    """The ID of the deployment event pipeline."""

    url: str
    """The URL of the deployment event pipeline."""

    display_name: str = Field(alias="displayName")
    """The name of the deployment event pipeline."""


class CompassDeploymentEventPipelineInputDtoDict(TypedDict):
    pipeline_id: str
    url: str
    display_name: str
