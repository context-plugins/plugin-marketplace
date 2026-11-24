from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class FieldModel(SdkBaseModel):
    description: Optional[str] = UNSET
    name: str
    required: Optional[bool] = UNSET
    """Hint that the field should be present; it is still reported missing rather than guessed."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Value type (default string). "date" is returned as YYYY-MM-DD; "list" is a list of strings."""


class FieldModelDict(TypedDict):
    description: NotRequired[str]
    name: str
    required: NotRequired[bool]
    type_: NotRequired[TypeOrStr]
