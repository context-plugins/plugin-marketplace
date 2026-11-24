from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UniversalCreditUsageByAction(SdkBaseModel):
    credit_action: Optional[str] = UNSET
    """The credit action being tracked. One of ``PersonSearch``, ``CompanySearch``, ``ProfessionalEmailEnrichment``,
    ``PersonalEmailEnrichment``, ``PhoneEnrichment``, ``PersonEnrichment``, ``CompanyEnrichment``,
    ``HealthcareEnrichment``"""

    attempted_count: Optional[int] = UNSET
    """Number of attempted credit actions"""

    succeeded_count: Optional[int] = UNSET
    """Number of successful credit actions"""

    credits_used: Optional[int] = UNSET
    """Total credits used by this credit action"""

    last_synced: Optional[RFC3339DateTime] = UNSET
    """Timestamp of the last sync of the user credit usage by action data"""


class UniversalCreditUsageByActionDict(TypedDict):
    credit_action: NotRequired[str]
    attempted_count: NotRequired[int]
    succeeded_count: NotRequired[int]
    credits_used: NotRequired[int]
    last_synced: NotRequired[RFC3339DateTime]
