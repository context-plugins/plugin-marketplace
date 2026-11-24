from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FallbackReason(SdkBaseModel):
    """Native SQL Execution Data"""

    fallback_reason: Optional[str] = Field(default=UNSET, alias="fallbackReason")
    """Optional. Fallback to Spark reason."""

    fallback_node: Optional[str] = Field(default=UNSET, alias="fallbackNode")
    """Optional. Fallback node information."""


class FallbackReasonDict(TypedDict):
    fallback_reason: NotRequired[str]
    fallback_node: NotRequired[str]
