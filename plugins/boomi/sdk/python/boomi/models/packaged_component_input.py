from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PackagedComponentInput(SdkBaseModel):
    """Input for creating a packaged component."""

    component_id: str = Field(alias="componentId")
    """ID of the component to package."""

    component_version: str = Field(alias="componentVersion")
    """Version of the component to include in the package."""

    package_version: Optional[str] = Field(default=UNSET, alias="packageVersion")
    """Optional version label for the package."""

    notes: Optional[str] = UNSET
    """Optional notes about this package version."""


class PackagedComponentInputDict(TypedDict):
    component_id: str
    component_version: str
    package_version: NotRequired[str]
    notes: NotRequired[str]
