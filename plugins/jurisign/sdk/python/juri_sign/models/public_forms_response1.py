from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_form import PublicForm, PublicFormDict


class PublicFormsResponse1(SdkBaseModel):
    data: Optional[PublicForm] = UNSET


class PublicFormsResponse1Dict(TypedDict):
    data: NotRequired[PublicFormDict]
