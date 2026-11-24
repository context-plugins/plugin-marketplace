from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeArchbeePublicDocumentsApi(str, Enum):
    """OPTIONAL. which type of search to use; default is word-based"""

    WORDS = "words"
    AI_CHAT = "ai-chat"
    AI_RETRIEVAL = "ai-retrieval"

    __str__ = str.__str__


TypeArchbeePublicDocumentsApiOrStr: TypeAlias = Annotated[
    TypeArchbeePublicDocumentsApi | str, open_enum_validator(TypeArchbeePublicDocumentsApi)
]
