from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .input_context import InputContext, InputContextDict
from .output_context import OutputContext, OutputContextDict


class IntentSummary(SdkBaseModel):
    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The unique identifier assigned to the intent. Use this ID to get detailed information about the intent with the
    DescribeIntent operation."""

    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of the intent."""

    intent_display_name: Optional[str] = Field(default=UNSET, alias="intentDisplayName")
    """The display name of the intent."""

    description: Optional[str] = UNSET
    """The description of the intent."""

    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """If this intent is derived from a built-in intent, the name of the parent intent."""

    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """The input contexts that must be active for this intent to be considered for recognition."""

    output_contexts: Optional[list[OutputContext]] = Field(default=UNSET, alias="outputContexts")
    """The output contexts that are activated when this intent is fulfilled."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The timestamp of the date and time that the intent was last updated."""


class IntentSummaryDict(TypedDict):
    intent_id: NotRequired[str]
    intent_name: NotRequired[str]
    intent_display_name: NotRequired[str]
    description: NotRequired[str]
    parent_intent_signature: NotRequired[str]
    input_contexts: NotRequired[list[InputContextDict]]
    output_contexts: NotRequired[list[OutputContextDict]]
    last_updated_date_time: NotRequired[RFC3339DateTime]
