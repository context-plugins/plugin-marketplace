from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class CloudflowTemplate(SdkBaseModel):
    """A read-only CloudFlow template (blueprint). Use ``POST /flows`` with ``templateId`` to create a new flow
    initialised from this template."""

    id: str
    """Unique identifier of the template."""

    name: str
    """Human-readable display name of the template."""

    description: Optional[str] = UNSET
    """Short summary of what the template does and which use case it addresses."""

    instructions: OptionalNullable[str] = UNSET
    """Step-by-step operator guidance for configuring a flow created from this template. ``null`` when no instructions
    have been authored."""

    create_time: RFC3339DateTime = Field(alias="createTime")
    """ISO 8601 (UTC) creation timestamp."""

    update_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    """ISO 8601 (UTC) last-modified timestamp. ``null`` if never modified."""


class CloudflowTemplateDict(TypedDict):
    id: str
    name: str
    description: NotRequired[str]
    instructions: NotRequired[str | None]
    create_time: RFC3339DateTime
    update_time: NotRequired[RFC3339DateTime | None]
