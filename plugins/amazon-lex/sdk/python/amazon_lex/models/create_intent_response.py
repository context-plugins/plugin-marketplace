from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
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


class CreateIntentResponse(SdkBaseModel):
    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """A unique identifier for the intent."""

    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name specified for the intent."""

    intent_display_name: Optional[str] = Field(default=UNSET, alias="intentDisplayName")
    """The display name specified for the intent."""

    description: Optional[str] = UNSET
    """The description specified for the intent."""

    parent_intent_signature: Optional[str] = Field(default=UNSET, alias="parentIntentSignature")
    """The signature of the parent intent specified for the intent."""

    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """The sample utterances specified for the intent."""

    dialog_code_hook: Optional[DialogCodeHookSettings] = Field(default=UNSET, alias="dialogCodeHook")
    fulfillment_code_hook: Optional[FulfillmentCodeHookSettings] = Field(default=UNSET, alias="fulfillmentCodeHook")
    intent_confirmation_setting: Optional[IntentConfirmationSetting] = Field(
        default=UNSET, alias="intentConfirmationSetting"
    )
    intent_closing_setting: Optional[IntentClosingSetting] = Field(default=UNSET, alias="intentClosingSetting")
    input_contexts: Optional[list[InputContext]] = Field(default=UNSET, alias="inputContexts")
    """The list of input contexts specified for the intent."""

    output_contexts: Optional[list[OutputContext]] = Field(default=UNSET, alias="outputContexts")
    """The list of output contexts specified for the intent."""

    kendra_configuration: Optional[KendraConfiguration] = Field(default=UNSET, alias="kendraConfiguration")
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with the intent."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot associated with the intent."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale that the intent is specified to use."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the intent was created."""

    initial_response_setting: Optional[InitialResponseSetting] = Field(default=UNSET, alias="initialResponseSetting")
    qn_a_intent_configuration: Optional[QnAIntentConfiguration] = Field(default=UNSET, alias="qnAIntentConfiguration")
    q_in_connect_intent_configuration: Optional[QInConnectIntentConfiguration] = Field(
        default=UNSET, alias="qInConnectIntentConfiguration"
    )


class CreateIntentResponseDict(TypedDict):
    intent_id: NotRequired[str]
    intent_name: NotRequired[str]
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
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    initial_response_setting: NotRequired[InitialResponseSettingDict]
    qn_a_intent_configuration: NotRequired[QnAIntentConfigurationDict]
    q_in_connect_intent_configuration: NotRequired[QInConnectIntentConfigurationDict]
