from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .value_model_content import ValueModelContent, ValueModelContentDict


class ValueModelDetail(SdkBaseModel):
    id: UUID
    """Value model version ID."""

    version: int
    """Monotonically increasing version number."""

    content: ValueModelContent
    """Full value model configuration: value types, formulas, signals, and overrides."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    activated_at: RFC3339DateTime | None = Field(alias="activatedAt")
    effective_from: RFC3339DateTime | None = Field(alias="effectiveFrom")
    effective_to: RFC3339DateTime | None = Field(alias="effectiveTo")


class ValueModelDetailDict(TypedDict):
    id: UUID
    version: int
    content: ValueModelContentDict
    created_at: RFC3339DateTime
    activated_at: RFC3339DateTime | None
    effective_from: RFC3339DateTime | None
    effective_to: RFC3339DateTime | None
