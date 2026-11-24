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
from .slot_priority import SlotPriority, SlotPriorityDict


class UpdateIntentRequest(SdkBaseModel):
    intent_id: str = Field(alias="intentId")
    """The unique identifier of the intent to update."""

    intent_name: str = Field(alias="intentName")
    """The new name for the intent."""

    intent_display_name: Optional[str] = Field(default=UNSET, alias="intentDisplayName")
    """The new display name for the intent."""

    description: Optional[str] = UNSET
    """The new description of the intent."""

    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """The signature of the new built-in intent to use as the parent of this intent."""

    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """New utterances used to invoke the intent."""

    dialog_code_hook: Optional[DialogCodeHookSettings] = Field(default=UNSET, alias="dialogCodeHook")
    fulfillment_code_hook: Optional[FulfillmentCodeHookSettings] = Field(default=UNSET, alias="fulfillmentCodeHook")
    slot_priorities: Optional[list[SlotPriority]] = Field(default=UNSET, alias="slotPriorities")
    """A new list of slots and their priorities that are contained by the intent."""

    intent_confirmation_setting: Optional[IntentConfirmationSetting] = Field(
        default=UNSET, alias="intentConfirmationSetting"
    )
    intent_closing_setting: Optional[IntentClosingSetting] = Field(default=UNSET, alias="intentClosingSetting")
    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """A new list of contexts that must be active in order for Amazon Lex to consider the intent."""

    output_contexts: Optional[list[OutputContext]] = Field(default=UNSET, alias="outputContexts")
    """A new list of contexts that Amazon Lex activates when the intent is fulfilled."""

    kendra_configuration: Optional[KendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the intent."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the intent. Must be DRAFT."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where this intent is used. The string must match one of the supported
    locales. For more information, see Supported languages."""

    initial_response_setting: Optional[InitialResponseSetting] = Field(default=UNSET, alias="initialResponseSetting")
    qn_a_intent_configuration: Optional[QnAIntentConfiguration] = Field(default=UNSET, alias="qnAIntentConfiguration")
    q_in_connect_intent_configuration: Optional[QInConnectIntentConfiguration] = Field(
        default=UNSET, alias="qInConnectIntentConfiguration"
    )


class UpdateIntentRequestDict(TypedDict):
    intent_id: str
    intent_name: str
    intent_display_name: NotRequired[str]
    description: NotRequired[str]
    parent_intent_signature: NotRequired[str]
    sample_utterances: NotRequired[list[SampleUtteranceDict]]
    dialog_code_hook: NotRequired[DialogCodeHookSettingsDict]
    fulfillment_code_hook: NotRequired[FulfillmentCodeHookSettingsDict]
    slot_priorities: NotRequired[list[SlotPriorityDict]]
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
