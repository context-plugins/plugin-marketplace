from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ResponseRow(SdkBaseModel):
    id: str
    form_id: str = Field(alias="formId")
    data: Any
    """Answers keyed by field id."""

    meta: Any | None
    """Submission metadata incl. the respondent snapshot."""

    form_version_id: str | None = Field(alias="formVersionId")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ResponseRowDict(TypedDict):
    id: str
    form_id: str
    data: Any
    meta: Any | None
    form_version_id: str | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime | None
