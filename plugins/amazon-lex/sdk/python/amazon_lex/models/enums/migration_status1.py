from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MigrationStatus1(str, Enum):
    """The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2. There may be
    alerts and warnings that need to be resolved to complete the migration."""

    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


MigrationStatus1OrStr: TypeAlias = Annotated[MigrationStatus1 | str, open_enum_validator(MigrationStatus1)]
