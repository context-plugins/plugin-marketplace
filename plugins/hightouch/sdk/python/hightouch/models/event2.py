from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.on_schema_violation import OnSchemaViolationOrStr
from .enums.on_undeclared_fields import OnUndeclaredFieldsOrStr
from .enums.type import TypeOrStr


class Event2(SdkBaseModel):
    schema_value: dict[str, Any] = Field(alias="schema")
    """The JSON schema that validates the event. Required."""

    on_undeclared_fields: Optional[OnUndeclaredFieldsOrStr] = Field(default=UNSET, alias="onUndeclaredFields")
    """What happens to events that contain fields not in the schema. One of ALLOW_EVENT, BLOCK_EVENT, or OMIT_FIELDS.
    Optional, defaults to OMIT_FIELDS."""

    on_schema_violation: Optional[OnSchemaViolationOrStr] = Field(default=UNSET, alias="onSchemaViolation")
    """What happens to events that violate the schema. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to
    BLOCK_EVENT."""

    version: Optional[str] = UNSET
    """The event version. Defaults to "default", optional. You probably don't need to set this."""

    slug: Optional[str] = UNSET
    """The event's slug. If not specified, one will be generated."""

    name: Optional[str] = UNSET
    """The event's name. Required for track events."""

    type_: TypeOrStr = Field(alias="type")
    """The event's type. One of track, identify, page, screen, or group. Required."""


class Event2Dict(TypedDict):
    schema_value: dict[str, Any]
    on_undeclared_fields: NotRequired[OnUndeclaredFieldsOrStr]
    on_schema_violation: NotRequired[OnSchemaViolationOrStr]
    version: NotRequired[str]
    slug: NotRequired[str]
    name: NotRequired[str]
    type_: TypeOrStr
