from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dialog_code_hook_settings import DialogCodeHookSettings, DialogCodeHookSettingsDict
from .fulfillment_code_hook_settings import FulfillmentCodeHookSettings, FulfillmentCodeHookSettingsDict
from .initial_response_setting import InitialResponseSetting, InitialResponseSettingDict
from .input_context import InputContext, InputContextDict
from .intent_closing_setting import IntentClosingSetting, IntentClosingSettingDict
from .intent_confirmation_setting import IntentConfirmationSetting, IntentConfirmationSettingDict
from .kendra_configuration import KendraConfiguration, KendraConfigurationDict
from .output_context import OutputContext, OutputContextDict
from .q_in_connect_intent_configuration import QInConnectIntentConfiguration, QInConnectIntentConfigurationDict
from .qn_a_intent_configuration import QnAIntentConfiguration, QnAIntentConfigurationDict
from .sample_utterance import SampleUtterance, SampleUtteranceDict


class CreateIntentRequest(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the
    name of any built-in intent."""

    intent_display_name: Optional[str] = Field(default=UNSET, alias="intentDisplayName")
    """A display name for the intent. If configured, This name will be shown to users during Intent Disambiguation
    instead of the intent name. Display names should be user-friendly, descriptive and match the intent's purpose to
    improve user experience during disambiguation."""

    description: Optional[str] = UNSET
    """A description of the intent. Use the description to help identify the intent in lists."""

    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """A unique identifier for the built-in intent to base this intent on."""

    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a
    {PizzaSize} pizza". In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they
    should be displayed in the utterance shown to the user.."""

    dialog_code_hook: Optional[DialogCodeHookSettings] = Field(default=UNSET, alias="dialogCodeHook")
    fulfillment_code_hook: Optional[FulfillmentCodeHookSettings] = Field(default=UNSET, alias="fulfillmentCodeHook")
    intent_confirmation_setting: Optional[IntentConfirmationSetting] = Field(
        default=UNSET, alias="intentConfirmationSetting"
    )
    intent_closing_setting: Optional[IntentClosingSetting] = Field(default=UNSET, alias="intentClosingSetting")
    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """A list of contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an
    input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified
    contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex
    will not use the intent. A context can be automatically activated using the outputContexts property or it can be set
    at runtime. For example, if there are two intents with different input contexts that respond to the same utterances,
    only the intent with the acti"""

    output_contexts: Optional[list[OutputContext]] = Field(default=UNSET, alias="outputContexts")
    """A lists of contexts that the intent activates when it is fulfilled. You can use an output context to indicate the
    intents that Amazon Lex should consider for the next turn of the conversation with a customer. When you use the
    outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled.
    You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be
    active, or the length of time that the context should be active."""

    kendra_configuration: Optional[KendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with this intent."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with this intent."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used
    by the intent must have the same locale. For more information, see Supported languages."""

    initial_response_setting: Optional[InitialResponseSetting] = Field(default=UNSET, alias="initialResponseSetting")
    qn_a_intent_configuration: Optional[QnAIntentConfiguration] = Field(default=UNSET, alias="qnAIntentConfiguration")
    q_in_connect_intent_configuration: Optional[QInConnectIntentConfiguration] = Field(
        default=UNSET, alias="qInConnectIntentConfiguration"
    )


class CreateIntentRequestDict(TypedDict):
    intent_name: str
    intent_display_name: NotRequired[str]
    description: NotRequired[str]
    parent_intent_signature: NotRequired[str]
    sample_utterances: NotRequired[list[SampleUtteranceDict]]
    dialog_code_hook: NotRequired[DialogCodeHookSettingsDict]
    fulfillment_code_hook: NotRequired[FulfillmentCodeHookSettingsDict]
    intent_confirmation_setting: NotRequired[IntentConfirmationSettingDict]
    intent_closing_setting: NotRequired[IntentClosingSettingDict]
    input_contexts: NotRequired[list[InputContextDict]]
    output_contexts: NotRequired[list[OutputContextDict]]
    kendra_configuration: NotRequired[KendraConfigurationDict]
    bot_id: str
    bot_version: str
    locale_id: str
    initial_response_setting: NotRequired[InitialResponseSettingDict]
    qn_a_intent_configuration: NotRequired[QnAIntentConfigurationDict]
    q_in_connect_intent_configuration: NotRequired[QInConnectIntentConfigurationDict]
