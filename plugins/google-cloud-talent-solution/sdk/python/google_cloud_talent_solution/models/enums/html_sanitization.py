from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HtmlSanitization(str, Enum):
    """Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction *
    incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't
    disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY."""

    HTML_SANITIZATION_UNSPECIFIED = "HTML_SANITIZATION_UNSPECIFIED"
    HTML_SANITIZATION_DISABLED = "HTML_SANITIZATION_DISABLED"
    SIMPLE_FORMATTING_ONLY = "SIMPLE_FORMATTING_ONLY"

    __str__ = str.__str__


HtmlSanitizationOrStr: TypeAlias = Annotated[HtmlSanitization | str, open_enum_validator(HtmlSanitization)]
