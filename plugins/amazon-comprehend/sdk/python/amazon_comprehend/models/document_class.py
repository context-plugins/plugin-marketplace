from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentClass(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the class."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The confidence score that Amazon Comprehend has this class correctly attributed."""

    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number in the input document. This field is present in the response only if your request includes the Byte
    parameter."""


class DocumentClassDict(TypedDict):
    name: NotRequired[str]
    score: NotRequired[float]
    page: NotRequired[int]
