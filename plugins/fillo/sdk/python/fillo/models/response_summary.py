from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .field_model import FieldModel, FieldModelDict
from .recent import Recent, RecentDict


class ResponseSummary(SdkBaseModel):
    form_id: str = Field(alias="formId")
    total: int
    """Accepted responses counted."""

    first_at: RFC3339DateTime | None = Field(alias="firstAt")
    last_at: RFC3339DateTime | None = Field(alias="lastAt")
    fields: list[FieldModel]
    recent: list[Recent]


class ResponseSummaryDict(TypedDict):
    form_id: str
    total: int
    first_at: RFC3339DateTime | None
    last_at: RFC3339DateTime | None
    fields: list[FieldModelDict]
    recent: list[RecentDict]
