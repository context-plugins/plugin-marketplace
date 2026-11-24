from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceDeliverdDevTasksApi(str, Enum):
    """The connected tool to read from (Organisation → Integrations & webhooks): langfuse, langsmith, braintrust or
    weave"""

    LANGFUSE = "langfuse"
    LANGSMITH = "langsmith"
    BRAINTRUST = "braintrust"
    WEAVE = "weave"

    __str__ = str.__str__


SourceDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    SourceDeliverdDevTasksApi | str, open_enum_validator(SourceDeliverdDevTasksApi)
]
