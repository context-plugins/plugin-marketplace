from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeHudPlatformRolloutsApi(str, Enum):
    CLAUDE = "claude"
    CLAUDE_CLI = "claude_cli"
    CODEX_CLI = "codex_cli"
    OPENAI = "openai"
    GEMINI = "gemini"
    OPENAI_COMPATIBLE = "openai_compatible"

    __str__ = str.__str__


TypeHudPlatformRolloutsApiOrStr: TypeAlias = Annotated[
    TypeHudPlatformRolloutsApi | str, open_enum_validator(TypeHudPlatformRolloutsApi)
]
