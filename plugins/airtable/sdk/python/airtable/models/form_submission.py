from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FormSubmission(SdkBaseModel):
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    view_id: Optional[str] = Field(default=UNSET, alias="viewId")


class FormSubmissionDict(TypedDict):
    table_id: NotRequired[str]
    view_id: NotRequired[str]
