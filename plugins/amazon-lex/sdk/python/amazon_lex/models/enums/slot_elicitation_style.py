from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotElicitationStyle(str, Enum):
    """Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can
    spell out their input to make it clear to your bot. Spell by letter - "b" "o" "b" Spell by word - "b as in boy" "o
    as in oscar" "b as in boy" For more information, see Using spelling to enter slot values ."""

    DEFAULT = "Default"
    SPELL_BY_LETTER = "SpellByLetter"
    SPELL_BY_WORD = "SpellByWord"

    __str__ = str.__str__


SlotElicitationStyleOrStr: TypeAlias = Annotated[SlotElicitationStyle | str, open_enum_validator(SlotElicitationStyle)]
