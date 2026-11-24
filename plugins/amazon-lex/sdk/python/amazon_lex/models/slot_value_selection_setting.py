from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .advanced_recognition_setting import AdvancedRecognitionSetting, AdvancedRecognitionSettingDict
from .enums.resolution_strategy import ResolutionStrategyOrStr
from .slot_value_regex_filter import SlotValueRegexFilter, SlotValueRegexFilterDict


class SlotValueSelectionSetting(SdkBaseModel):
    resolution_strategy: ResolutionStrategyOrStr = Field(alias="resolutionStrategy")
    """Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to
    one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to
    the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the
    resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the
    valueSelectionStrategy, the default is ORIGINAL_VALUE."""

    regex_filter: Optional[SlotValueRegexFilter] = Field(default=UNSET, alias="regexFilter")
    advanced_recognition_setting: Optional[AdvancedRecognitionSetting] = Field(
        default=UNSET, alias="advancedRecognitionSetting"
    )


class SlotValueSelectionSettingDict(TypedDict):
    resolution_strategy: ResolutionStrategyOrStr
    regex_filter: NotRequired[SlotValueRegexFilterDict]
    advanced_recognition_setting: NotRequired[AdvancedRecognitionSettingDict]
