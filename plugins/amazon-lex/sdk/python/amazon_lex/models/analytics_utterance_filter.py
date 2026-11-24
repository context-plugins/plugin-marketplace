from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name18 import Name18OrStr
from .enums.operator5 import Operator5OrStr


class AnalyticsUtteranceFilter(SdkBaseModel):
    name: Name18OrStr
    """The category by which to filter the utterances. The descriptions for each option are as follows: BotAlias – The
    name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The
    modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with.
    SessionId – The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request
    in a session. UtteranceState – The state of the utterance. UtteranceText – The text in the utterance."""

    operator: Operator5OrStr
    """The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals
    GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion
    – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. SessionId – EQ. OriginatingRequestId – EQ. UtteranceState – EQ.
    UtteranceText – EQ, CO."""

    values: list[str]
    """An array containing the values of the category by which to apply the operator to filter the results. You can
    provide multiple values if the operator is EQ or CO. If you provide multiple values, you filter for results that
    equal/contain any of the values. For example, if the name, operator, and values fields are Modality, EQ, and
    [Speech, Text], the operation filters for results where the modality was either Speech or Text."""


class AnalyticsUtteranceFilterDict(TypedDict):
    name: Name18OrStr
    operator: Operator5OrStr
    values: list[str]
