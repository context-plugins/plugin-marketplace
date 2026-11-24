from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .code_hook import CodeHook, CodeHookDict
from .follow_up_prompt import FollowUpPrompt, FollowUpPromptDict
from .fulfillment_activity import FulfillmentActivity, FulfillmentActivityDict
from .input_context import InputContext, InputContextDict
from .models_lex_kendra_configuration import ModelsLexKendraConfiguration, ModelsLexKendraConfigurationDict
from .models_lex_output_context import ModelsLexOutputContext, ModelsLexOutputContextDict
from .models_lex_slot import ModelsLexSlot, ModelsLexSlotDict
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict


class CreateIntentVersionResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the intent."""

    description: Optional[str] = UNSET
    """A description of the intent."""

    slots: Optional[list[ModelsLexSlot]] = UNSET
    """An array of slot types that defines the information required to fulfill the intent."""

    sample_utterances: Optional[list[str]] = Field(default=UNSET, alias="sampleUtterances")
    """An array of sample utterances configured for the intent."""

    confirmation_prompt: Optional[Prompt] = Field(default=UNSET, alias="confirmationPrompt")
    rejection_statement: Optional[Statement] = Field(default=UNSET, alias="rejectionStatement")
    follow_up_prompt: Optional[FollowUpPrompt] = Field(default=UNSET, alias="followUpPrompt")
    conclusion_statement: Optional[Statement] = Field(default=UNSET, alias="conclusionStatement")
    dialog_code_hook: Optional[CodeHook] = Field(default=UNSET, alias="dialogCodeHook")
    fulfillment_activity: Optional[FulfillmentActivity] = Field(default=UNSET, alias="fulfillmentActivity")
    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """A unique identifier for a built-in intent."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the intent was updated."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the intent was created."""

    version: Optional[str] = UNSET
    """The version number assigned to the new version of the intent."""

    checksum: Optional[str] = UNSET
    """Checksum of the intent version created."""

    kendra_configuration: Optional[ModelsLexKendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """An array of InputContext objects that lists the contexts that must be active for Amazon Lex to choose the intent
    in a conversation with the user."""

    output_contexts: Optional[list[ModelsLexOutputContext]] = Field(default=UNSET, alias="outputContexts")
    """An array of OutputContext objects that lists the contexts that the intent activates when the intent is
    fulfilled."""


class CreateIntentVersionResponseDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    slots: NotRequired[list[ModelsLexSlotDict]]
    sample_utterances: NotRequired[list[str]]
    confirmation_prompt: NotRequired[PromptDict]
    rejection_statement: NotRequired[StatementDict]
    follow_up_prompt: NotRequired[FollowUpPromptDict]
    conclusion_statement: NotRequired[StatementDict]
    dialog_code_hook: NotRequired[CodeHookDict]
    fulfillment_activity: NotRequired[FulfillmentActivityDict]
    parent_intent_signature: NotRequired[str]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
    checksum: NotRequired[str]
    kendra_configuration: NotRequired[ModelsLexKendraConfigurationDict]
    input_contexts: NotRequired[list[InputContextDict]]
    output_contexts: NotRequired[list[ModelsLexOutputContextDict]]
