from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .form_field import FormField, FormFieldDict


class PagesFormFieldsResponse(SdkBaseModel):
    form_fields: Optional[list[FormField]] = UNSET


class PagesFormFieldsResponseDict(TypedDict):
    form_fields: NotRequired[list[FormFieldDict]]
