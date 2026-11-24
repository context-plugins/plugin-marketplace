from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevPlaybooksApi(str, Enum):
    """procedure for playbooks of steps, prompt for approved prompts; both when omitted"""

    PROCEDURE = "procedure"
    PROMPT = "prompt"

    __str__ = str.__str__


KindDeliverdDevPlaybooksApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevPlaybooksApi | str, open_enum_validator(KindDeliverdDevPlaybooksApi)
]
