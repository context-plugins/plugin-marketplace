from __future__ import annotations

from typing import Any

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UniversalCreditPersonLookupInput(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique profile ID"""

    name: Optional[str] = UNSET
    """Name of the desired profile. Must specify along with ``current_employer``"""

    current_employer: Optional[str] = UNSET
    """Current employer of the desired profile. Must specify along with ``name``"""

    title: Optional[str] = UNSET
    """Job title of the desired profile"""

    linkedin_ext_url: Optional[str] = UNSET
    """linkedin_ext_url deprecated, please use ``linkedin_url``"""

    linkedin_url: Optional[str] = UNSET
    """LinkedIn URL of the desired profile"""

    email: Optional[EmailStr] = UNSET
    """An email address for the desired profile"""

    phone: Optional[str] = UNSET
    """A phone number for the desired profile in either E.164 format or international format.
    - Example: ``+15555555555``"""

    npi_number: Optional[int] = UNSET
    """An NPI number for the desired profile (US healthcare professional)"""

    reveal_phone: bool = False
    """Whether to reveal the phone enrichment data for the desired profile"""

    reveal_professional_email: bool = False
    """Whether to reveal the professional email enrichment data for the desired profile"""

    reveal_personal_email: bool = False
    """Whether to reveal the personal email enrichment data for the desired profile"""

    reveal_detailed_person_enrichment: bool = False
    """Whether to reveal the detailed person enrichment data for the desired profile"""

    reveal_healthcare_enrichment: bool = False
    """Whether to reveal the healthcare enrichment data for the desired profile"""

    metadata: OptionalNullable[dict[str, Any]] = UNSET
    """User metadata about the profile, such as external ids, tags, notes, etc."""


class UniversalCreditPersonLookupInputDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    current_employer: NotRequired[str]
    title: NotRequired[str]
    linkedin_ext_url: NotRequired[str]
    linkedin_url: NotRequired[str]
    email: NotRequired[EmailStr]
    phone: NotRequired[str]
    npi_number: NotRequired[int]
    reveal_phone: NotRequired[bool]
    reveal_professional_email: NotRequired[bool]
    reveal_personal_email: NotRequired[bool]
    reveal_detailed_person_enrichment: NotRequired[bool]
    reveal_healthcare_enrichment: NotRequired[bool]
    metadata: NotRequired[dict[str, Any] | None]
