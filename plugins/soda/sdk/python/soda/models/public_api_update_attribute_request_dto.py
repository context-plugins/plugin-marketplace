from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiUpdateAttributeRequestDto(SdkBaseModel):
    allowed_values: Optional[list[str]] = Field(default=UNSET, alias="allowedValues")
    description: Optional[str] = UNSET
    label: Optional[str] = UNSET


class PublicApiUpdateAttributeRequestDtoDict(TypedDict):
    allowed_values: NotRequired[list[str]]
    description: NotRequired[str]
    label: NotRequired[str]
