from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.email_type import EmailTypeOrStr


class EmailAddress(SdkBaseModel):
    email: Optional[str] = UNSET
    """The email address (alternative to 'address')"""

    address: Optional[str] = UNSET
    """The email address (alternative to 'email')"""

    email_type: Optional[EmailTypeOrStr] = Field(default=UNSET, alias="emailType")
    """The type of email address (alternative to 'type')"""

    email_confidence: Optional[str] = Field(default=UNSET, alias="emailConfidence")
    """The confidence level of the email address"""

    update_date: Optional[str] = Field(default=UNSET, alias="updateDate")
    """The update date of the email address"""


class EmailAddressDict(TypedDict):
    email: NotRequired[str]
    address: NotRequired[str]
    email_type: NotRequired[EmailTypeOrStr]
    email_confidence: NotRequired[str]
    update_date: NotRequired[str]
