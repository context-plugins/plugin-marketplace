from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.obfuscation_setting_amazon_lex_model_building_v2_versions_api import (
    ObfuscationSettingAmazonLexModelBuildingV2VersionsApiOrStr,
)
from .enums.slot_constraint import SlotConstraintOrStr
from .prompt import Prompt, PromptDict
from .slot_default_value_spec import SlotDefaultValueSpec, SlotDefaultValueSpecDict


class ModelsLexSlot(SdkBaseModel):
    name: str
    """The name of the slot."""

    description: Optional[str] = UNSET
    """A description of the slot."""

    slot_constraint: SlotConstraintOrStr = Field(alias="slotConstraint")
    """Specifies whether the slot is required or optional."""

    slot_type: Optional[str] = Field(default=UNSET, alias="slotType")
    """The type of the slot, either a custom slot type that you defined or one of the built-in slot types."""

    slot_type_version: Optional[str] = Field(default=UNSET, alias="slotTypeVersion")
    """The version of the slot type."""

    value_elicitation_prompt: Optional[Prompt] = Field(default=UNSET, alias="valueElicitationPrompt")
    priority: Optional[int] = UNSET
    """Directs Amazon Lex the order in which to elicit this slot value from the user. For example, if the intent has two
    slots with priorities 1 and 2, AWS Amazon Lex first elicits a value for the slot with priority 1. If multiple slots
    share the same priority, the order in which Amazon Lex elicits values is arbitrary."""

    sample_utterances: Optional[list[str]] = Field(default=UNSET, alias="sampleUtterances")
    """If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can
    provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of
    understanding user utterances."""

    response_card: Optional[str] = Field(default=UNSET, alias="responseCard")
    """A set of possible responses for the slot type used by text-based clients. A user chooses an option from the
    response card, instead of using text to reply."""

    obfuscation_setting: Optional[ObfuscationSettingAmazonLexModelBuildingV2VersionsApiOrStr] = Field(
        default=UNSET, alias="obfuscationSetting"
    )
    """Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot,
    the value is replaced by the slot name in curly braces ({}). For example, if the slot name is "full_name",
    obfuscated values are replaced with "{full_name}". For more information, see Slot Obfuscation ."""

    default_value_spec: Optional[SlotDefaultValueSpec] = Field(default=UNSET, alias="defaultValueSpec")


class ModelsLexSlotDict(TypedDict):
    name: str
    description: NotRequired[str]
    slot_constraint: SlotConstraintOrStr
    slot_type: NotRequired[str]
    slot_type_version: NotRequired[str]
    value_elicitation_prompt: NotRequired[PromptDict]
    priority: NotRequired[int]
    sample_utterances: NotRequired[list[str]]
    response_card: NotRequired[str]
    obfuscation_setting: NotRequired[ObfuscationSettingAmazonLexModelBuildingV2VersionsApiOrStr]
    default_value_spec: NotRequired[SlotDefaultValueSpecDict]
