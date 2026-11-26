from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Widget(str, Enum):
    """"Widget type of how answers appear in the client.

    * ``buttons``—Answers appear in clickable pill boxes.
    * ``menu``—Answers appear in clickable boxes vertically stacked."
    """

    BUTTONS = "buttons"
    MENU = "menu"

    __str__ = str.__str__


WidgetOrStr: TypeAlias = Annotated[Widget | str, open_enum_validator(Widget)]
