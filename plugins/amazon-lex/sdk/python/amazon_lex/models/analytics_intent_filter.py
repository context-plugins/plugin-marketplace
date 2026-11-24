from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name2 import Name2OrStr
from .enums.operator1 import Operator1OrStr


class AnalyticsIntentFilter(SdkBaseModel):
    name: Name2OrStr
    """The category by which to filter the intents. The descriptions for each option are as follows: BotAlias – The name
    of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The modality of
    the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated with. SessionId –
    The identifier of the session with the bot. OriginatingRequestId – The identifier of the first request in a session.
    IntentName – The name of the intent. IntentEndState – The final state of the intent."""

    operator: Operator1OrStr
    """The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals
    GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion
    – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. SessionId – EQ. OriginatingRequestId – EQ. IntentName – EQ, CO.
    IntentEndState – EQ, CO."""

    values: list[str]
    """An array containing the values of the category by which to apply the operator to filter the results. You can
    provide multiple values if the operator is EQ or CO. If you provide multiple values, you filter for results that
    equal/contain any of the values. For example, if the name, operator, and values fields are Modality, EQ, and
    [Speech, Text], the operation filters for results where the modality was either Speech or Text."""


class AnalyticsIntentFilterDict(TypedDict):
    name: Name2OrStr
    operator: Operator1OrStr
    values: list[str]
