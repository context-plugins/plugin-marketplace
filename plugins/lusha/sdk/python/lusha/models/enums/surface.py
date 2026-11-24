from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Surface(str, Enum):
    API = "api"
    MCP = "mcp"
    WORKSPACE = "workspace"

    __str__ = str.__str__


SurfaceOrStr: TypeAlias = Annotated[Surface | str, open_enum_validator(Surface)]
