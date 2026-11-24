from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotResolutionStrategy(str, Enum):
    """Specifies whether assisted slot resolution is turned on for the slot or not. If the value is EnhancedFallback,
    assisted slot resolution is activated when Amazon Lex V2 defaults to the AMAZON.FallbackIntent. If the value is
    Default, assisted slot resolution is turned off."""

    ENHANCED_FALLBACK = "EnhancedFallback"
    DEFAULT = "Default"

    __str__ = str.__str__


SlotResolutionStrategyOrStr: TypeAlias = Annotated[
    SlotResolutionStrategy | str, open_enum_validator(SlotResolutionStrategy)
]
