from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """What a ``github`` result is: a repository, an issue, a pull request, or a discussion. Only present for
    ``search_service: "github"``."""

    REPO = "repo"
    ISSUE = "issue"
    PR = "pr"
    DISCUSSION = "discussion"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
