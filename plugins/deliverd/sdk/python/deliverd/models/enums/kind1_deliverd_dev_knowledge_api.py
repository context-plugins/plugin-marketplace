from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind1DeliverdDevKnowledgeApi(str, Enum):
    """fact (true here), convention (how we do it), decision (settled, with why), procedure (a how-to note), glossary
    (what a term means here), contact (who to ask about what) or known_issue (a problem and its workaround)"""

    FACT = "fact"
    CONVENTION = "convention"
    DECISION = "decision"
    PROCEDURE = "procedure"
    GLOSSARY = "glossary"
    CONTACT = "contact"
    KNOWN_ISSUE = "known_issue"

    __str__ = str.__str__


Kind1DeliverdDevKnowledgeApiOrStr: TypeAlias = Annotated[
    Kind1DeliverdDevKnowledgeApi | str, open_enum_validator(Kind1DeliverdDevKnowledgeApi)
]
