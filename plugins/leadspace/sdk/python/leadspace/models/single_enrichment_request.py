from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_input import CompanyInput, CompanyInputDict
from .custom_field import CustomField, CustomFieldDict
from .person_input import PersonInput, PersonInputDict


class SingleEnrichmentRequest(SdkBaseModel):
    person: Optional[PersonInput] = UNSET
    company: Optional[CompanyInput] = UNSET
    external_id: Optional[str] = UNSET
    """External identifier echoed back on the result. Not used for processing."""

    custom_fields: Optional[list[CustomField]] = UNSET


class SingleEnrichmentRequestDict(TypedDict):
    person: NotRequired[PersonInputDict]
    company: NotRequired[CompanyInputDict]
    external_id: NotRequired[str]
    custom_fields: NotRequired[list[CustomFieldDict]]
