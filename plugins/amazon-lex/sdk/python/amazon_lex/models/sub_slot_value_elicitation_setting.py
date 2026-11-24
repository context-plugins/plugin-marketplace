from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .prompt_specification import PromptSpecification, PromptSpecificationDict
from .sample_utterance import SampleUtterance, SampleUtteranceDict
from .slot_default_value_specification import SlotDefaultValueSpecification, SlotDefaultValueSpecificationDict
from .wait_and_continue_specification import WaitAndContinueSpecification, WaitAndContinueSpecificationDict


class SubSlotValueElicitationSetting(SdkBaseModel):
    default_value_specification: Optional[SlotDefaultValueSpecification] = Field(
        default=UNSET, alias="defaultValueSpecification"
    )
    prompt_specification: PromptSpecification = Field(alias="promptSpecification")
    sample_utterances: Optional[list[SampleUtterance]] = Field(default=UNSET, alias="sampleUtterances")
    """If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value, you can
    provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable of understanding
    user utterances. This is similar to SampleUtterances for slots."""

    wait_and_continue_specification: Optional[WaitAndContinueSpecification] = Field(
        default=UNSET, alias="waitAndContinueSpecification"
    )


class SubSlotValueElicitationSettingDict(TypedDict):
    default_value_specification: NotRequired[SlotDefaultValueSpecificationDict]
    prompt_specification: PromptSpecificationDict
    sample_utterances: NotRequired[list[SampleUtteranceDict]]
    wait_and_continue_specification: NotRequired[WaitAndContinueSpecificationDict]
