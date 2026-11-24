from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Language(str, Enum):
    """The programming language for the Docker images."""

    JAVA = "JAVA"
    PYTHON = "PYTHON"
    NODE_JS = "NODE_JS"
    RUBY = "RUBY"
    GOLANG = "GOLANG"
    DOCKER = "DOCKER"
    ANDROID = "ANDROID"
    DOTNET = "DOTNET"
    BASE = "BASE"
    PHP = "PHP"

    __str__ = str.__str__


LanguageOrStr: TypeAlias = Annotated[Language | str, open_enum_validator(Language)]
