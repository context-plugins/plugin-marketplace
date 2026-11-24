from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntentTopicsOperator(str, Enum):
    """Recommended over ``intentTopicsCondition``. ``any``/``all`` are aliases for ``or``/``and``.
    ``intentTopicsCondition`` is not deprecated and remains accepted."""

    OR = "or"
    AND = "and"
    ANY = "any"
    ALL = "all"

    __str__ = str.__str__


IntentTopicsOperatorOrStr: TypeAlias = Annotated[IntentTopicsOperator | str, open_enum_validator(IntentTopicsOperator)]
