from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.signal import SignalOrStr


class Metadata(SdkBaseModel):
    refresh_job_info: Optional[bool] = Field(default=UNSET, alias="refreshJobInfo")
    """Set this to true to refresh job information for the contact. This replaces any outdated job details with the most
    current information. By default, Lusha returns results for records that have at least one of the specified contact
    details (e.g., phone number or email address)."""

    filter_by: Optional[str] = Field(default=UNSET, alias="filterBy")
    """Filters the results based on specific contact details. Use the following options: emailAddresses, phoneNumbers"""

    reveal_emails: Optional[bool] = Field(default=UNSET, alias="revealEmails")
    """Set ``revealEmails=true`` to retrieve only the email address of the contact."""

    reveal_phones: Optional[bool] = Field(default=UNSET, alias="revealPhones")
    """Set ``revealPhones=true`` to retrieve only the phone number of the contact."""

    signals: Optional[list[SignalOrStr]] = UNSET
    """Array of signal types to retrieve for the contact.
    - ``allSignals``: All available signal types
    - ``promotion``: Promotion signals
    - ``companyChange``: Company change signals"""

    signals_start_date: Optional[Date] = Field(default=UNSET, alias="signalsStartDate")
    """Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified."""

    partial_profile: bool = Field(default=False, alias="partialProfile")
    """When set to true, returns a simplified contact profile with basic information only."""


class MetadataDict(TypedDict):
    refresh_job_info: NotRequired[bool]
    filter_by: NotRequired[str]
    reveal_emails: NotRequired[bool]
    reveal_phones: NotRequired[bool]
    signals: NotRequired[list[SignalOrStr]]
    signals_start_date: NotRequired[Date]
    partial_profile: NotRequired[bool]
