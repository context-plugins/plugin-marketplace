from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enrichment_options import EnrichmentOptions, EnrichmentOptionsDict
from .include_surfe_people_api import IncludeSurfePeopleApi, IncludeSurfePeopleApiDict
from .notification_options import NotificationOptions, NotificationOptionsDict
from .person_input import PersonInput, PersonInputDict


class PeopleEnrichmentRequest(SdkBaseModel):
    people: list[PersonInput]
    """People to enrich. Each entry needs at least a linkedinUrl, or firstName + lastName + companyName or
    companyDomain."""

    include: IncludeSurfePeopleApi
    """Which fields to retrieve."""

    enrichment_options: Optional[EnrichmentOptions] = Field(default=UNSET, alias="enrichmentOptions")
    notification_options: Optional[NotificationOptions] = Field(default=UNSET, alias="notificationOptions")


class PeopleEnrichmentRequestDict(TypedDict):
    people: list[PersonInputDict]
    include: IncludeSurfePeopleApiDict
    enrichment_options: NotRequired[EnrichmentOptionsDict]
    notification_options: NotRequired[NotificationOptionsDict]
