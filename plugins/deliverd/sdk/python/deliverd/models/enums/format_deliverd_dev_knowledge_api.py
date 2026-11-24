from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatDeliverdDevKnowledgeApi(str, Enum):
    MARKDOWN = "markdown"
    JSON = "json"

    __str__ = str.__str__


FormatDeliverdDevKnowledgeApiOrStr: TypeAlias = Annotated[
    FormatDeliverdDevKnowledgeApi | str, open_enum_validator(FormatDeliverdDevKnowledgeApi)
]
