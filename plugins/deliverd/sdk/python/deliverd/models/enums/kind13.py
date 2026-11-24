from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind13(str, Enum):
    """decision for a decision, fact otherwise, when omitted"""

    FACT = "fact"
    CONVENTION = "convention"
    DECISION = "decision"
    PROCEDURE = "procedure"
    GLOSSARY = "glossary"
    CONTACT = "contact"
    KNOWN_ISSUE = "known_issue"

    __str__ = str.__str__


Kind13OrStr: TypeAlias = Annotated[Kind13 | str, open_enum_validator(Kind13)]
