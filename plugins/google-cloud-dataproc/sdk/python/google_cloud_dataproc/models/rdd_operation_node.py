from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.output_deterministic_level import OutputDeterministicLevelOrStr


class RddOperationNode(SdkBaseModel):
    """A node in the RDD operation graph. Corresponds to a single RDD."""

    barrier: Optional[bool] = UNSET
    callsite: Optional[str] = UNSET
    node_id: Optional[int] = Field(default=UNSET, alias="nodeId")
    output_deterministic_level: Optional[OutputDeterministicLevelOrStr] = Field(
        default=UNSET, alias="outputDeterministicLevel"
    )
    cached: Optional[bool] = UNSET
    name: Optional[str] = UNSET


class RddOperationNodeDict(TypedDict):
    barrier: NotRequired[bool]
    callsite: NotRequired[str]
    node_id: NotRequired[int]
    output_deterministic_level: NotRequired[OutputDeterministicLevelOrStr]
    cached: NotRequired[bool]
    name: NotRequired[str]
