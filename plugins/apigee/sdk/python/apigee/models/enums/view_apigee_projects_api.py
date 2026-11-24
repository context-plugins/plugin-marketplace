from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ViewApigeeProjectsApi(str, Enum):
    API_VIEW_TYPE_UNSPECIFIED = "API_VIEW_TYPE_UNSPECIFIED"
    MCP_SERVER = "MCP_SERVER"
    MCP_TOOL = "MCP_TOOL"

    __str__ = str.__str__


ViewApigeeProjectsApiOrStr: TypeAlias = Annotated[
    ViewApigeeProjectsApi | str, open_enum_validator(ViewApigeeProjectsApi)
]
