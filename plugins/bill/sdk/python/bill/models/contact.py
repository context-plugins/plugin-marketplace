from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Contact(SdkBaseModel):
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """First name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Last name"""


class ContactDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
