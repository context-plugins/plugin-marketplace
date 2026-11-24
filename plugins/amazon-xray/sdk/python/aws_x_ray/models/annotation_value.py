from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnnotationValue(SdkBaseModel):
    """Exactly one member is set."""

    number_value: Optional[float] = Field(default=UNSET, alias="NumberValue")
    """Value for a Number annotation."""

    boolean_value: Optional[bool] = Field(default=UNSET, alias="BooleanValue")
    """Value for a Boolean annotation."""

    string_value: Optional[str] = Field(default=UNSET, alias="StringValue")
    """Value for a String annotation."""


class AnnotationValueDict(TypedDict):
    number_value: NotRequired[float]
    boolean_value: NotRequired[bool]
    string_value: NotRequired[str]
