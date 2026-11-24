from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotTypeCategory(str, Enum):
    """Indicates the type of the slot type. Custom - A slot type that you created using custom values. For more
    information, see Creating custom slot types. Extended - A slot type created by extending the AMAZON.AlphaNumeric
    built-in slot type. For more information, see AMAZON.AlphaNumeric . ExternalGrammar - A slot type using a custom
    GRXML grammar to define values. For more information, see Using a custom grammar slot type."""

    CUSTOM = "Custom"
    EXTENDED = "Extended"
    EXTERNAL_GRAMMAR = "ExternalGrammar"
    COMPOSITE = "Composite"

    __str__ = str.__str__


SlotTypeCategoryOrStr: TypeAlias = Annotated[SlotTypeCategory | str, open_enum_validator(SlotTypeCategory)]
