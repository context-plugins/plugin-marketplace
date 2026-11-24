from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PackagedComponent(SdkBaseModel):
    """A versioned, deployable package of a Boomi component."""

    package_id: Optional[str] = Field(default=UNSET, alias="packageId")
    """Unique identifier of the packaged component."""

    component_id: Optional[str] = Field(default=UNSET, alias="componentId")
    """ID of the underlying component."""

    component_version: Optional[str] = Field(default=UNSET, alias="componentVersion")
    """Version of the component included in this package."""

    component_type: Optional[str] = Field(default=UNSET, alias="componentType")
    """Type of the packaged component (process, connector, etc.)."""

    package_version: Optional[str] = Field(default=UNSET, alias="packageVersion")
    """Version label for this package."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the package was created."""


class PackagedComponentDict(TypedDict):
    package_id: NotRequired[str]
    component_id: NotRequired[str]
    component_version: NotRequired[str]
    component_type: NotRequired[str]
    package_version: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
