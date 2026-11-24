from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntryType(str, Enum):
    """How the use came to the register: built in-house, a supplier's AI, a feature in a service, a proof of concept, or
    found in use"""

    INTERNAL_BUILD = "internal_build"
    SUPPLIER_AI = "supplier_ai"
    FEATURE_IN_SERVICE = "feature_in_service"
    PROOF_OF_CONCEPT = "proof_of_concept"
    DISCOVERED = "discovered"

    __str__ = str.__str__


EntryTypeOrStr: TypeAlias = Annotated[EntryType | str, open_enum_validator(EntryType)]
