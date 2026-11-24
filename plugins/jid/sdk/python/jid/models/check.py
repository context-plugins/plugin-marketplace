from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.group import GroupOrStr
from .enums.severity import SeverityOrStr
from .enums.status import StatusOrStr
from .lookup import Lookup, LookupDict


class Check(SdkBaseModel):
    """One check from the registry. New checks add rows, never fields."""

    id: Optional[str] = UNSET
    """Stable id: registered, sanctions, threat_feeds, email_address, mail_domain, domain_age, website, affiliation,
    adverse_records, licence, phone, location, enquiry, funding, complaints, lookalike_domain, email_auth, history"""

    label: Optional[str] = UNSET
    group: Optional[GroupOrStr] = UNSET
    status: Optional[StatusOrStr] = UNSET
    severity: Optional[SeverityOrStr] = UNSET
    """What a fail means: block = do not engage, warn = verify first, info = never changes the recommendation"""

    evidence: Optional[str] = UNSET
    lookup: Optional[Lookup] = UNSET
    phrase: Optional[str] = UNSET


class CheckDict(TypedDict):
    id: NotRequired[str]
    label: NotRequired[str]
    group: NotRequired[GroupOrStr]
    status: NotRequired[StatusOrStr]
    severity: NotRequired[SeverityOrStr]
    evidence: NotRequired[str]
    lookup: NotRequired[LookupDict]
    phrase: NotRequired[str]
