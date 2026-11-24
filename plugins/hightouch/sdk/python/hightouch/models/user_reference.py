from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserReference(SdkBaseModel):
    """The Hightouch user who created or last updated a resource. Changes made with an API key are attributed to the
    user who created the key."""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The user's id"""

    name: str
    """The user's name"""

    email: str
    """The user's email address"""


class UserReferenceDict(TypedDict):
    id: float
    name: str
    email: str
