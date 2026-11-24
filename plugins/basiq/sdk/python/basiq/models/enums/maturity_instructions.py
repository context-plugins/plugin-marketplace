from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MaturityInstructions(str, Enum):
    """Current instructions on action to be taken at maturity. This includes default actions that may be specified in
    the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments."""

    HOLD_ON_MATURITY = "HOLD_ON_MATURITY"
    PAID_OUT_AT_MATURITY = "PAID_OUT_AT_MATURITY"
    ROLLED_OVER = "ROLLED_OVER"

    __str__ = str.__str__


MaturityInstructionsOrStr: TypeAlias = Annotated[MaturityInstructions | str, open_enum_validator(MaturityInstructions)]
