from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics import Analytics, AnalyticsDict
from .enriched_address import EnrichedAddress, EnrichedAddressDict
from .enums.level import LevelOrStr
from .enums.original_email_verification_status import OriginalEmailVerificationStatusOrStr
from .enums.verification_source import VerificationSourceOrStr
from .enums.verification_status import VerificationStatusOrStr


class EnrichedPerson(SdkBaseModel):
    ug_person_id: Optional[str] = UNSET
    """Unique Leadspace person identifier"""

    first_name: Optional[str] = UNSET
    last_name: Optional[str] = UNSET
    title: Optional[str] = UNSET
    department: Optional[str] = UNSET
    level: Optional[LevelOrStr] = UNSET
    email: Optional[str] = UNSET
    original_email: Optional[str] = UNSET
    original_email_verification_status: Optional[OriginalEmailVerificationStatusOrStr] = UNSET
    verification_status: Optional[VerificationStatusOrStr] = UNSET
    verification_source: Optional[VerificationSourceOrStr] = UNSET
    linkedin_profile: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    is_retired: Optional[str] = UNSET
    address: Optional[EnrichedAddress] = UNSET
    analytics: Optional[Analytics] = UNSET


class EnrichedPersonDict(TypedDict):
    ug_person_id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    title: NotRequired[str]
    department: NotRequired[str]
    level: NotRequired[LevelOrStr]
    email: NotRequired[str]
    original_email: NotRequired[str]
    original_email_verification_status: NotRequired[OriginalEmailVerificationStatusOrStr]
    verification_status: NotRequired[VerificationStatusOrStr]
    verification_source: NotRequired[VerificationSourceOrStr]
    linkedin_profile: NotRequired[str]
    phone: NotRequired[str]
    is_retired: NotRequired[str]
    address: NotRequired[EnrichedAddressDict]
    analytics: NotRequired[AnalyticsDict]
