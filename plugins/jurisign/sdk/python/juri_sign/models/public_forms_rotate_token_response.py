from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_form import PublicForm, PublicFormDict


class PublicFormsRotateTokenResponse(SdkBaseModel):
    data: Optional[PublicForm] = UNSET
    message: Optional[str] = UNSET


class PublicFormsRotateTokenResponseDict(TypedDict):
    data: NotRequired[PublicFormDict]
    message: NotRequired[str]
