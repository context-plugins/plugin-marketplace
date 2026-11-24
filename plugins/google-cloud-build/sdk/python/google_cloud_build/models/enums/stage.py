from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Stage(str, Enum):
    """Output only. Current step of the installation process."""

    STAGE_UNSPECIFIED = "STAGE_UNSPECIFIED"
    PENDING_CREATE_APP = "PENDING_CREATE_APP"
    PENDING_USER_OAUTH = "PENDING_USER_OAUTH"
    PENDING_INSTALL_APP = "PENDING_INSTALL_APP"
    COMPLETE = "COMPLETE"

    __str__ = str.__str__


StageOrStr: TypeAlias = Annotated[Stage | str, open_enum_validator(Stage)]
