from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MerchantSubtype(str, Enum):
    """Duplicated from onboarding config for self-check."""

    FORMAL_EDUCATION = "formal_education"
    COURSES_TRAINING = "courses_training"

    __str__ = str.__str__


MerchantSubtypeOrStr: TypeAlias = Annotated[MerchantSubtype | str, open_enum_validator(MerchantSubtype)]
