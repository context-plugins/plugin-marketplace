from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MigrationStatus(str, Enum):
    """Indicates the status of the migration. When the status is COMPLETE the migration is finished and the bot is
    available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration."""

    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


MigrationStatusOrStr: TypeAlias = Annotated[MigrationStatus | str, open_enum_validator(MigrationStatus)]
