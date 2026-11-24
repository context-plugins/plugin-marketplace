from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode1 import Mode1OrStr


class DocumentClassificationConfig(SdkBaseModel):
    mode: Mode1OrStr = Field(alias="Mode")
    """Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL."""

    labels: Optional[list[str]] = Field(default=UNSET, alias="Labels")
    """One or more labels to associate with the custom classifier."""


class DocumentClassificationConfigDict(TypedDict):
    mode: Mode1OrStr
    labels: NotRequired[list[str]]
