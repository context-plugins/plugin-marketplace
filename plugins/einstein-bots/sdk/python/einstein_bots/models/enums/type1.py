from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Referrer type."""

    SALESFORCE_CORE_BOT_ID = "Salesforce:Core:Bot:Id"
    SALESFORCE_BOT_RUNTIME_SESSION_ID = "Salesforce:BotRuntime:Session:Id"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
