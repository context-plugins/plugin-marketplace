from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of the transfer target."""

    SALESFORCE_CORE_BOT_ID = "Salesforce:Core:Bot:Id"
    SALESFORCE_CORE_QUEUE_ID = "Salesforce:Core:Queue:Id"
    SALESFORCE_CORE_SKILL_ID = "Salesforce:Core:Skill:Id"
    SALESFORCE_CORE_FLOW_ID = "Salesforce:Core:Flow:Id"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
