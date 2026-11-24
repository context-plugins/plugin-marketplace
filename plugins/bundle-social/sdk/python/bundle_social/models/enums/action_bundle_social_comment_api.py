from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionBundleSocialCommentApi(str, Enum):
    DELETE = "DELETE"
    HIDE = "HIDE"
    UNHIDE = "UNHIDE"
    LIKE = "LIKE"
    UNLIKE = "UNLIKE"
    APPROVE = "APPROVE"
    REJECT = "REJECT"

    __str__ = str.__str__


ActionBundleSocialCommentApiOrStr: TypeAlias = Annotated[
    ActionBundleSocialCommentApi | str, open_enum_validator(ActionBundleSocialCommentApi)
]
