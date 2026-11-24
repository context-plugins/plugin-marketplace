from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerContact(SdkBaseModel):
    """Customer contact."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """First name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Last name"""


class CustomerContactDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
