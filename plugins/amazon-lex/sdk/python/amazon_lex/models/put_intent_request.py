from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_hook import CodeHook, CodeHookDict
from .follow_up_prompt import FollowUpPrompt, FollowUpPromptDict
from .fulfillment_activity import FulfillmentActivity, FulfillmentActivityDict
from .input_context import InputContext, InputContextDict
from .models_lex_kendra_configuration import ModelsLexKendraConfiguration, ModelsLexKendraConfigurationDict
from .models_lex_output_context import ModelsLexOutputContext, ModelsLexOutputContextDict
from .models_lex_slot import ModelsLexSlot, ModelsLexSlotDict
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict


class PutIntentRequest(SdkBaseModel):
    name: str
    """The name of the intent. The name is not case sensitive. The name can't match a built-in intent name, or a
    built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called
    AMAZON.HelpIntent, you can't create a custom intent called HelpIntent. For a list of built-in intents, see Standard
    Built-in Intents in the Alexa Skills Kit."""

    description: Optional[str] = UNSET
    """A description of the intent."""

    slots: Optional[list[ModelsLexSlot]] = UNSET
    """An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined
    in the slots. For more information, see how-it-works."""

    sample_utterances: Optional[list[str]] = Field(default=UNSET, alias="sampleUtterances")
    """An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize}
    pizza", "Order {Quantity} {PizzaSize} pizzas". In each utterance, a slot name is enclosed in curly braces."""

    confirmation_prompt: Optional[Prompt] = Field(default=UNSET, alias="confirmationPrompt")
    rejection_statement: Optional[Statement] = Field(default=UNSET, alias="rejectionStatement")
    follow_up_prompt: Optional[FollowUpPrompt] = Field(default=UNSET, alias="followUpPrompt")
    conclusion_statement: Optional[Statement] = Field(default=UNSET, alias="conclusionStatement")
    dialog_code_hook: Optional[CodeHook] = Field(default=UNSET, alias="dialogCodeHook")
    fulfillment_activity: Optional[FulfillmentActivity] = Field(default=UNSET, alias="fulfillmentActivity")
    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see
    Standard Built-in Intents in the Alexa Skills Kit."""

    checksum: Optional[str] = UNSET
    """Identifies a specific revision of the $LATEST version. When you create a new intent, leave the checksum field
    blank. If you specify a checksum you get a BadRequestException exception. When you want to update a intent, set the
    checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the checksum
    field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception."""

    create_version: Optional[bool] = Field(default=UNSET, alias="createVersion")
    """When set to true a new numbered version of the intent is created. This is the same as calling the
    CreateIntentVersion operation. If you do not specify createVersion, the default is false."""

    kendra_configuration: Optional[ModelsLexKendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """An array of InputContext objects that lists the contexts that must be active for Amazon Lex to choose the intent
    in a conversation with the user."""

    output_contexts: Optional[list[ModelsLexOutputContext]] = Field(default=UNSET, alias="outputContexts")
    """An array of OutputContext objects that lists the contexts that the intent activates when the intent is
    fulfilled."""


class PutIntentRequestDict(TypedDict):
    name: str
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
    checksum: NotRequired[str]
    create_version: NotRequired[bool]
    kendra_configuration: NotRequired[ModelsLexKendraConfigurationDict]
    input_contexts: NotRequired[list[InputContextDict]]
    output_contexts: NotRequired[list[ModelsLexOutputContextDict]]
