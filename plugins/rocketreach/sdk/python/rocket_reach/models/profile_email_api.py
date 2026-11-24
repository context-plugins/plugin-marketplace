from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ProfileEmailApi(SdkBaseModel):
    email: Optional[str] = UNSET
    """The email address.
    - Example: ``info@rocketreach.co``"""

    smtp_valid: OptionalNullable[str] = UNSET
    """SMTP validation result. Options are ``valid``, ``invalid``, ``accept-all``, or ``unknown``.
    - Example: ``valid``"""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    """The type of email address. Options are ``personal``, ``professional``, ``disposable``, or ``role-based``.
    - Example: ``professional``"""

    last_validation_check: OptionalNullable[str] = UNSET
    """Timestamp of the last validation check of the email address.
    - Example: ``2026-01-01T12:00:00Z``"""

    grade: Optional[str] = UNSET
    """RocketReach internal grade for the email. See <a
    href="https://knowledgebase.rocketreach.co/hc/en-us/articles/360047771994">Email Grades</a> for details."""


class ProfileEmailApiDict(TypedDict):
    email: NotRequired[str]
    smtp_valid: NotRequired[str | None]
    type_: NotRequired[str | None]
    last_validation_check: NotRequired[str | None]
    grade: NotRequired[str]
