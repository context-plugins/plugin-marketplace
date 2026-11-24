from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3 import Type3OrStr


class CompletionResult(SdkBaseModel):
    """Resource that represents completion results."""

    image_uri: Optional[str] = Field(default=UNSET, alias="imageUri")
    """The URI of the company image for COMPANY_NAME."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="type")
    """The completion topic."""

    suggestion: Optional[str] = UNSET
    """The suggestion for the query."""


class CompletionResultDict(TypedDict):
    image_uri: NotRequired[str]
    type_: NotRequired[Type3OrStr]
    suggestion: NotRequired[str]
