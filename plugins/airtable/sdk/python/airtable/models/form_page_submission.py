from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FormPageSubmission(SdkBaseModel):
    page_id: Optional[str] = Field(default=UNSET, alias="pageId")


class FormPageSubmissionDict(TypedDict):
    page_id: NotRequired[str]
