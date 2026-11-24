from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grammar_slot_type_source import GrammarSlotTypeSource, GrammarSlotTypeSourceDict


class GrammarSlotTypeSetting(SdkBaseModel):
    source: Optional[GrammarSlotTypeSource] = UNSET


class GrammarSlotTypeSettingDict(TypedDict):
    source: NotRequired[GrammarSlotTypeSourceDict]
