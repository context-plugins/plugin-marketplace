from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .form_page_submission import FormPageSubmission, FormPageSubmissionDict
from .form_submission import FormSubmission, FormSubmissionDict


class SourceOptions(SdkBaseModel):
    form_submission: Optional[FormSubmission] = Field(default=UNSET, alias="formSubmission")
    form_page_submission: Optional[FormPageSubmission] = Field(default=UNSET, alias="formPageSubmission")


class SourceOptionsDict(TypedDict):
    form_submission: NotRequired[FormSubmissionDict]
    form_page_submission: NotRequired[FormPageSubmissionDict]
