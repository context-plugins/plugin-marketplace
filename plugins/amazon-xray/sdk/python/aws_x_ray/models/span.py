from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Span(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The span ID."""

    document: Optional[str] = Field(default=UNSET, alias="Document")
    """The span document."""


class SpanDict(TypedDict):
    id: NotRequired[str]
    document: NotRequired[str]
