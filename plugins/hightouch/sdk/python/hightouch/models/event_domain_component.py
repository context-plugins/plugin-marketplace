from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventDomainComponent(SdkBaseModel):
    """Reusable schema fragments that can be imported by event schemas."""

    model_config = ConfigDict(extra="forbid")

    id: Optional[str] = UNSET
    """The component's id. Omit when creating. On update, a component matches an existing one by id when supplied,
    otherwise by (name, version); include the id to rename a component in place."""

    slug: Optional[str] = UNSET
    """The component's slug. Optional when creating; generated from the name if omitted. Immutable after creation; an
    update that sends a different slug for an existing component is rejected."""

    name: str
    """The component's name. Required."""

    version: Optional[str] = UNSET
    """The component's version. Defaults to "default", optional. On update, an omitted version keeps the stored value
    when the component is matched by id; without an id, an omitted version only matches the stored "default" version,
    and the request is rejected if the name exists only under other versions."""

    description: Optional[str] = UNSET
    """The component's description. On update, an omitted description keeps the stored value; send an empty string to
    clear it."""

    schema_value: dict[str, Any] = Field(alias="schema")
    """The JSON schema fragment the component contributes. Required."""

    imports: Optional[list[str]] = UNSET
    """Read-only: the slugs of the components this component imports (derived from its ``$ref``s)."""


class EventDomainComponentDict(TypedDict):
    id: NotRequired[str]
    slug: NotRequired[str]
    name: str
    version: NotRequired[str]
    description: NotRequired[str]
    schema_value: dict[str, Any]
    imports: NotRequired[list[str]]
