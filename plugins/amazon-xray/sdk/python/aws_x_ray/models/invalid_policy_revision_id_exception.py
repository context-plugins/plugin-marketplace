from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidPolicyRevisionIdException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class InvalidPolicyRevisionIdExceptionDict(TypedDict):
    message: NotRequired[str]
