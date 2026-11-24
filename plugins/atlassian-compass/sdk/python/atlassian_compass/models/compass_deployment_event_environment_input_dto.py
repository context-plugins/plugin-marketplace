from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.category import CategoryOrStr


class CompassDeploymentEventEnvironmentInputDto(SdkBaseModel):
    """The environment where the deployment event has occurred."""

    category: CategoryOrStr
    """The type of environment where the deployment event occurred."""

    display_name: str = Field(alias="displayName")
    """The display name of the environment where the deployment event occurred."""

    environment_id: str = Field(alias="environmentId")
    """The ID of the environment where the deployment event occurred."""


class CompassDeploymentEventEnvironmentInputDtoDict(TypedDict):
    category: CategoryOrStr
    display_name: str
    environment_id: str
