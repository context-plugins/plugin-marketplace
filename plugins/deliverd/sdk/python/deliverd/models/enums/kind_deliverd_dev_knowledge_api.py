from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevKnowledgeApi(str, Enum):
    FACT = "fact"
    CONVENTION = "convention"
    DECISION = "decision"
    PROCEDURE = "procedure"
    GLOSSARY = "glossary"
    CONTACT = "contact"
    KNOWN_ISSUE = "known_issue"

    __str__ = str.__str__


KindDeliverdDevKnowledgeApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevKnowledgeApi | str, open_enum_validator(KindDeliverdDevKnowledgeApi)
]
