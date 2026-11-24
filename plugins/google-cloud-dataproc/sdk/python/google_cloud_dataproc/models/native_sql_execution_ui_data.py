from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fallback_reason import FallbackReason, FallbackReasonDict


class NativeSqlExecutionUiData(SdkBaseModel):
    """Native SQL Execution Data"""

    execution_id: Optional[str] = Field(default=UNSET, alias="executionId")
    """Required. Execution ID of the Native SQL Execution."""

    fallback_node_to_reason: Optional[list[FallbackReason]] = Field(default=UNSET, alias="fallbackNodeToReason")
    """Optional. Fallback node to reason."""

    num_native_nodes: Optional[int] = Field(default=UNSET, alias="numNativeNodes")
    """Optional. Number of nodes in Native."""

    num_fallback_nodes: Optional[int] = Field(default=UNSET, alias="numFallbackNodes")
    """Optional. Number of nodes fallen back to Spark."""

    fallback_description: Optional[str] = Field(default=UNSET, alias="fallbackDescription")
    """Optional. Description of the fallback."""

    description: Optional[str] = UNSET
    """Optional. Description of the execution."""


class NativeSqlExecutionUiDataDict(TypedDict):
    execution_id: NotRequired[str]
    fallback_node_to_reason: NotRequired[list[FallbackReasonDict]]
    num_native_nodes: NotRequired[int]
    num_fallback_nodes: NotRequired[int]
    fallback_description: NotRequired[str]
    description: NotRequired[str]
