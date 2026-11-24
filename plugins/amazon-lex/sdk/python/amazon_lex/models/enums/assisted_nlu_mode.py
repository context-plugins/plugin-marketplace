from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AssistedNluMode(str, Enum):
    """Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary intent recognition
    method, Fallback to use it only when standard NLU confidence is low, or DialogManager to use a large language model
    to manage the conversation, including intent recognition, slot elicitation, and confirmation."""

    PRIMARY = "Primary"
    FALLBACK = "Fallback"
    DIALOG_MANAGER = "DialogManager"

    __str__ = str.__str__


AssistedNluModeOrStr: TypeAlias = Annotated[AssistedNluMode | str, open_enum_validator(AssistedNluMode)]
