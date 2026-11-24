from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsersRequest1(SdkBaseModel):
    email: Optional[str] = UNSET
    """The end-users email address."""

    mobile: Optional[str] = UNSET
    """The end-users mobile number."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The end-users first name as an optional additional parameter."""

    middle_name: Optional[str] = Field(default=UNSET, alias="middleName")
    """The end-users middle name as an optional additional parameter."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The end-users last name as an optional additional parameter."""


class UsersRequest1Dict(TypedDict):
    email: NotRequired[str]
    mobile: NotRequired[str]
    first_name: NotRequired[str]
    middle_name: NotRequired[str]
    last_name: NotRequired[str]
