from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ProfilePhoneApi(SdkBaseModel):
    number: Optional[str] = UNSET
    """The phone number in international format
    - Example: ``+1 234-555-6789``"""

    e164: OptionalNullable[str] = UNSET
    """The phone number in E.164 format
    - Example: ``+12345556789``"""

    country_code: OptionalNullable[str] = UNSET
    """The country code associated with the phone number
    - Example: ``1`` for United States"""

    extension: OptionalNullable[str] = UNSET
    """The phone extension, if applicable
    - Example: ``123``"""

    type_: str = Field(default="unknown", alias="type")
    """The type of phone number. Options are ``mobile``, ``direct dial``, or ``other``.
    - Example: ``mobile``"""

    grade: Optional[str] = UNSET
    """Phone confidence grade.
    - ``A`` = Best: Confirmed as valid phone and strong identity match signals.
    - ``A-`` = Likely: Confirmed as valid phone, but unable to confirm identity.
    - ``B`` = Possible: Worth trying, especially if better options are not available."""

    validity: str = "unknown"
    """validity deprecated, please use ``grade`` instead."""

    recommended: bool = False
    """Indicates whether this is the recommended phone number to use as the best option for connecting with the person.
    - Example: ``true``"""

    premium: bool = False
    """``premium`` deprecated"""

    last_checked: Optional[RFC3339DateTime] = UNSET
    """``last_checked`` deprecated"""


class ProfilePhoneApiDict(TypedDict):
    number: NotRequired[str]
    e164: NotRequired[str | None]
    country_code: NotRequired[str | None]
    extension: NotRequired[str | None]
    type_: NotRequired[str]
    grade: NotRequired[str]
    validity: NotRequired[str]
    recommended: NotRequired[bool]
    premium: NotRequired[bool]
    last_checked: NotRequired[RFC3339DateTime]
