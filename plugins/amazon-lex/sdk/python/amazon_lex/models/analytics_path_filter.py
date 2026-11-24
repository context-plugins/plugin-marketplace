from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name12 import Name12OrStr
from .enums.operator3 import Operator3OrStr


class AnalyticsPathFilter(SdkBaseModel):
    name: Name12OrStr
    """The category by which to filter the intent paths. The descriptions for each option are as follows: BotAlias – The
    name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale of the bot. Modality – The
    modality of the session with the bot (audio, DTMF, or text). Channel – The channel that the bot is integrated
    with."""

    operator: Operator3OrStr
    """The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals
    GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion
    – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ."""

    values: list[str]
    """An array containing the values of the category by which to apply the operator to filter the results. You can
    provide multiple values if the operator is EQ or CO. If you provide multiple values, you filter for results that
    equal/contain any of the values. For example, if the name, operator, and values fields are Modality, EQ, and
    [Speech, Text], the operation filters for results where the modality was either Speech or Text."""


class AnalyticsPathFilterDict(TypedDict):
    name: Name12OrStr
    operator: Operator3OrStr
    values: list[str]
