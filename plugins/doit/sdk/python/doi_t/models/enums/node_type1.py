from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NodeType1(str, Enum):
    APP_COMPONENT = "app_component"
    APP_GROUP = "app_group"
    APP_LINK = "app_link"
    ATTACHMENT = "attachment"
    GROUP = "group"
    HOST = "host"
    LINK = "link"
    SERVICE = "service"

    __str__ = str.__str__


NodeType1OrStr: TypeAlias = Annotated[NodeType1 | str, open_enum_validator(NodeType1)]
