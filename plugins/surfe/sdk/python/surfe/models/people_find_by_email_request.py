from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PeopleFindByEmailRequest(SdkBaseModel):
    emails: list[EmailStr]
    """Email addresses to enrich."""


class PeopleFindByEmailRequestDict(TypedDict):
    emails: list[EmailStr]
