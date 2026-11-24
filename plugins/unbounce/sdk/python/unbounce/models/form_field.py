from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FormField(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    required: Optional[bool] = UNSET


class FormFieldDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    required: NotRequired[bool]
