from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleServiceAccount(SdkBaseModel):
    """Google service account"""

    account_email: Optional[str] = Field(default=UNSET, alias="accountEmail")
    """Email address of the service account."""

    subject_id: Optional[str] = Field(default=UNSET, alias="subjectId")
    """Unique identifier for the service account."""


class GoogleServiceAccountDict(TypedDict):
    account_email: NotRequired[str]
    subject_id: NotRequired[str]
