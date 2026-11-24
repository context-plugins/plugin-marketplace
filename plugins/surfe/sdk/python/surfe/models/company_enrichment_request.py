from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company1 import Company1, Company1Dict
from .include import Include, IncludeDict
from .notification_options import NotificationOptions, NotificationOptionsDict


class CompanyEnrichmentRequest(SdkBaseModel):
    companies: list[Company1]
    """Companies to enrich, identified by domain and/or externalID."""

    include: Optional[Include] = UNSET
    notification_options: Optional[NotificationOptions] = Field(default=UNSET, alias="notificationOptions")


class CompanyEnrichmentRequestDict(TypedDict):
    companies: list[Company1Dict]
    include: NotRequired[IncludeDict]
    notification_options: NotRequired[NotificationOptionsDict]
