from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Collaborator(SdkBaseModel):
    """A user collaborating on an automation idea or project"""

    user_id: Optional[int] = Field(default=UNSET, alias="userId")
    """Unique integer identifier of the collaborating user"""

    name: Optional[str] = UNSET
    """Display name of the collaborator"""

    email: Optional[EmailStr] = UNSET
    """Email address of the collaborator"""

    role: Optional[str] = UNSET
    """Role of this collaborator on the automation"""


class CollaboratorDict(TypedDict):
    user_id: NotRequired[int]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    role: NotRequired[str]
