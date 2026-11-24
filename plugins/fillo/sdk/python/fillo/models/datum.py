from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Datum(SdkBaseModel):
    id: str
    data: Any
    """Answers typed so far, keyed by field id."""

    page: int
    """Zero-based page reached."""

    updated_at: int = Field(alias="updatedAt")
    expires_at: int = Field(alias="expiresAt")
    respondent: Any | None
    """externalId, email, and name when identify() named the person."""


class DatumDict(TypedDict):
    id: str
    data: Any
    page: int
    updated_at: int
    expires_at: int
    respondent: Any | None
