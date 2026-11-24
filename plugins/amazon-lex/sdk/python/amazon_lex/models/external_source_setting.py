from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grammar_slot_type_setting import GrammarSlotTypeSetting, GrammarSlotTypeSettingDict


class ExternalSourceSetting(SdkBaseModel):
    grammar_slot_type_setting: Optional[GrammarSlotTypeSetting] = Field(default=UNSET, alias="grammarSlotTypeSetting")


class ExternalSourceSettingDict(TypedDict):
    grammar_slot_type_setting: NotRequired[GrammarSlotTypeSettingDict]
