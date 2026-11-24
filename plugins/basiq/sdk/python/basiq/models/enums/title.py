from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Title(str, Enum):
    """Name of the step the job needs to complete."""

    VERIFY_CREDENTIALS = "verify-credentials"
    RETRIEVE_ACCOUNTS = "retrieve-accounts"
    RETRIEVE_TRANSACTIONS = "retrieve-transactions"
    RETRIEVE_STATEMENTS = "retrieve-statements"

    __str__ = str.__str__


TitleOrStr: TypeAlias = Annotated[Title | str, open_enum_validator(Title)]
