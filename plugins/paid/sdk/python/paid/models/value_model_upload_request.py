from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .value_model_content import ValueModelContent, ValueModelContentDict


class ValueModelUploadRequest(SdkBaseModel):
    content: ValueModelContent
    """Full value model configuration: value types, formulas, signals, and overrides."""

    effective_from: Optional[RFC3339DateTime] = Field(default=UNSET, alias="effectiveFrom")
    effective_to: Optional[RFC3339DateTime] = Field(default=UNSET, alias="effectiveTo")


class ValueModelUploadRequestDict(TypedDict):
    content: ValueModelContentDict
    effective_from: NotRequired[RFC3339DateTime]
    effective_to: NotRequired[RFC3339DateTime]
