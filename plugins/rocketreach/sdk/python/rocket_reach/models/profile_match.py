from __future__ import annotations

from typing import Any

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.lookup_type_enum import LookupTypeEnum, LookupTypeEnumOrStr


class ProfileMatch(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique profile ID.
    - Example: ``123456``"""

    name: Optional[str] = UNSET
    """Name of the desired profile. Must specify along with ``current_employer``.
    - Example: ``Jamie Gullbrand``"""

    current_employer: Optional[str] = UNSET
    """Current employer of the desired profile. Must specify along with ``name``.
    - Example: ``RocketReach``"""

    title: Optional[str] = UNSET
    """Job title of the desired profile.
    - Example: ``Product Manager``"""

    linkedin_ext_url: Optional[str] = UNSET
    """linkedin_ext_url deprecated, please use ``linkedin_url``"""

    linkedin_url: Optional[str] = UNSET
    """LinkedIn URL of the desired profile.
    - Example: ``www.linkedin.com/in/jamesgullbrand``"""

    email: Optional[EmailStr] = UNSET
    """An email address for the desired profile.
    - Example: ``jamie@rocketreach.co``"""

    phone: Optional[str] = UNSET
    """A phone number for the desired profile in either E.164 format or international format.
    - Example: ``+15555555555``"""

    npi_number: Optional[int] = UNSET
    """An NPI number for the desired profile (US healthcare professional)
    - Example: ``1234567890``"""

    lookup_type: LookupTypeEnumOrStr = LookupTypeEnum.STANDARD
    """Lookup type for the request

    * ``standard`` - standard
    * ``premium`` - premium
    * ``premium (feeds disabled)`` - premium (feeds disabled)
    * ``bulk`` - bulk
    * ``phone`` - phone
    * ``enrich`` - enrich"""

    metadata: OptionalNullable[dict[str, Any]] = UNSET
    """User metadata about the profile, such as external ids, tags, notes, etc."""


class ProfileMatchDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    current_employer: NotRequired[str]
    title: NotRequired[str]
    linkedin_ext_url: NotRequired[str]
    linkedin_url: NotRequired[str]
    email: NotRequired[EmailStr]
    phone: NotRequired[str]
    npi_number: NotRequired[int]
    lookup_type: NotRequired[LookupTypeEnumOrStr]
    metadata: NotRequired[dict[str, Any] | None]
