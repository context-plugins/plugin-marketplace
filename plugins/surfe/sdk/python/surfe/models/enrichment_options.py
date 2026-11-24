from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.accepted_email_type import AcceptedEmailTypeOrStr


class EnrichmentOptions(SdkBaseModel):
    accepted_email_type: Optional[AcceptedEmailTypeOrStr] = Field(default=UNSET, alias="acceptedEmailType")
    skip_mobile_enrichment_if_no_email_found: Optional[bool] = Field(
        default=UNSET, alias="skipMobileEnrichmentIfNoEmailFound"
    )


class EnrichmentOptionsDict(TypedDict):
    accepted_email_type: NotRequired[AcceptedEmailTypeOrStr]
    skip_mobile_enrichment_if_no_email_found: NotRequired[bool]
