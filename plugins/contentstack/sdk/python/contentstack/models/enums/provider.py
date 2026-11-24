from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Provider(str, Enum):
    """Name of the LLM provider."""

    OPENAI = "openai"
    ANTHROPIC = "anthropic"
    AZURE_OPENAI = "azure_openai"

    __str__ = str.__str__


ProviderOrStr: TypeAlias = Annotated[Provider | str, open_enum_validator(Provider)]
