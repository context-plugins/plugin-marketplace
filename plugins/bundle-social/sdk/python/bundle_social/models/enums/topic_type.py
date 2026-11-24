from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TopicType(str, Enum):
    STANDARD = "STANDARD"
    EVENT = "EVENT"
    OFFER = "OFFER"
    ALERT = "ALERT"

    __str__ = str.__str__


TopicTypeOrStr: TypeAlias = Annotated[TopicType | str, open_enum_validator(TopicType)]
