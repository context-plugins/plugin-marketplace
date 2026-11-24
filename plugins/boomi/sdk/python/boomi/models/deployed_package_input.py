from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeployedPackageInput(SdkBaseModel):
    """Input for deploying a packaged component to an environment."""

    environment_id: str = Field(alias="environmentId")
    """ID of the target environment."""

    package_id: str = Field(alias="packageId")
    """ID of the packaged component to deploy."""

    notes: Optional[str] = UNSET
    """Optional deployment notes."""


class DeployedPackageInputDict(TypedDict):
    environment_id: str
    package_id: str
    notes: NotRequired[str]
