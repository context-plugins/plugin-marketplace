from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResolutionStrategy(str, Enum):
    """Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to
    one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to
    the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the
    resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the
    valueSelectionStrategy, the default is ORIGINAL_VALUE."""

    ORIGINAL_VALUE = "OriginalValue"
    TOP_RESOLUTION = "TopResolution"
    CONCATENATION = "Concatenation"

    __str__ = str.__str__


ResolutionStrategyOrStr: TypeAlias = Annotated[ResolutionStrategy | str, open_enum_validator(ResolutionStrategy)]
