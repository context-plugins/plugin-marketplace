from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_context import ActiveContext, ActiveContextDict
from .runtime_hints import RuntimeHints, RuntimeHintsDict


class InputSessionStateSpecification(SdkBaseModel):
    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Session attributes for the session state."""

    active_contexts: Optional[list[ActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """Active contexts for the session state."""

    runtime_hints: Optional[RuntimeHints] = Field(default=UNSET, alias="runtimeHints")


class InputSessionStateSpecificationDict(TypedDict):
    session_attributes: NotRequired[dict[str, str]]
    active_contexts: NotRequired[list[ActiveContextDict]]
    runtime_hints: NotRequired[RuntimeHintsDict]
