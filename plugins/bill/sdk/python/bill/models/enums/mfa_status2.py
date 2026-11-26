from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MfaStatus2(str, Enum):
    """MFA status of the organization.
    * ``DISABLED``: MFA is disabled for the organization.
    * ``SETUP``: MFA setup is incomplete. Validate phone to complete MFA setup.
    * ``CHALLENGE``: MFA setup is complete. MFA challenge is required for MFA sign in.
    * ``COMPLETE``: Both MFA setup and MFA sign in steps are complete. The API session is MFA trusted."""

    DISABLED = "DISABLED"
    SETUP = "SETUP"
    CHALLENGE = "CHALLENGE"
    COMPLETE = "COMPLETE"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


MfaStatus2OrStr: TypeAlias = Annotated[MfaStatus2 | str, open_enum_validator(MfaStatus2)]
