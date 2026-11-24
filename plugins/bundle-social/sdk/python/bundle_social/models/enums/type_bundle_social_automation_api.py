from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBundleSocialAutomationApi(str, Enum):
    COMMENT_CREATED = "COMMENT_CREATED"
    DM_RECEIVED = "DM_RECEIVED"
    QUICK_REPLY_CLICKED = "QUICK_REPLY_CLICKED"
    BUTTON_CLICKED = "BUTTON_CLICKED"
    MANUAL_TEST = "MANUAL_TEST"

    __str__ = str.__str__


TypeBundleSocialAutomationApiOrStr: TypeAlias = Annotated[
    TypeBundleSocialAutomationApi | str, open_enum_validator(TypeBundleSocialAutomationApi)
]
