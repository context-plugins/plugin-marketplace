from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class FormDetail(SdkBaseModel):
    id: str
    slug: str
    name: str
    status: StatusOrStr
    schema_value: Any = Field(alias="schema")
    """The published FormSchema (see @usefillo/core)."""

    settings: Any
    """The published FormSettings."""

    has_draft: bool = Field(alias="hasDraft")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class FormDetailDict(TypedDict):
    id: str
    slug: str
    name: str
    status: StatusOrStr
    schema_value: Any
    settings: Any
    has_draft: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
