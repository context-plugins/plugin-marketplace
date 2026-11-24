from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaChallengeRequestDto(SdkBaseModel):
    """Generate MFA challenge"""

    use_backup: Optional[bool] = Field(default=UNSET, alias="useBackup")
    """Set as ``false`` to generate the token with the primary device. The default value is ``false``."""


class MfaChallengeRequestDtoDict(TypedDict):
    use_backup: NotRequired[bool]
