from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.slot_constraint import SlotConstraintOrStr
from .prompt_specification import PromptSpecification, PromptSpecificationDict
from .sample_utterance import SampleUtterance, SampleUtteranceDict
from .slot_capture_setting import SlotCaptureSetting, SlotCaptureSettingDict
from .slot_default_value_specification import SlotDefaultValueSpecification, SlotDefaultValueSpecificationDict
from .slot_resolution_setting import SlotResolutionSetting, SlotResolutionSettingDict
from .wait_and_continue_specification import WaitAndContinueSpecification, WaitAndContinueSpecificationDict


class SlotValueElicitationSetting(SdkBaseModel):
    default_value_specification: Optional[SlotDefaultValueSpecification] = Field(
        default=UNSET, alias="defaultValueSpecification"
    )
    slot_constraint: SlotConstraintOrStr = Field(alias="slotConstraint")
    """Specifies whether the slot is required or optional."""

    prompt_specification: Optional[PromptSpecification] = Field(default=UNSET, alias="promptSpecification")
    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can
    provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of
    understanding user utterances."""

    wait_and_continue_specification: Optional[WaitAndContinueSpecification] = Field(
        default=UNSET, alias="waitAndContinueSpecification"
    )
    slot_capture_setting: Optional[SlotCaptureSetting] = Field(default=UNSET, alias="slotCaptureSetting")
    slot_resolution_setting: Optional[SlotResolutionSetting] = Field(default=UNSET, alias="slotResolutionSetting")


class SlotValueElicitationSettingDict(TypedDict):
    default_value_specification: NotRequired[SlotDefaultValueSpecificationDict]
    slot_constraint: SlotConstraintOrStr
    prompt_specification: NotRequired[PromptSpecificationDict]
    sample_utterances: NotRequired[list[SampleUtteranceDict]]
    wait_and_continue_specification: NotRequired[WaitAndContinueSpecificationDict]
    slot_capture_setting: NotRequired[SlotCaptureSettingDict]
    slot_resolution_setting: NotRequired[SlotResolutionSettingDict]
