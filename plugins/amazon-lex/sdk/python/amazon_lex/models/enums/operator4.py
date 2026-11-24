from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator4(str, Enum):
    """The operation by which to filter the category. The following operations are possible: CO – Contains EQ – Equals
    GT – Greater than LT – Less than The operators that each filter supports are listed below: BotAlias – EQ. BotVersion
    – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ. Duration – EQ, GT, LT. conversationEndState – EQ, CO. SessionId –
    EQ. OriginatingRequestId – EQ. IntentPath – EQ."""

    EQ = "EQ"
    GT = "GT"
    LT = "LT"

    __str__ = str.__str__


Operator4OrStr: TypeAlias = Annotated[Operator4 | str, open_enum_validator(Operator4)]
