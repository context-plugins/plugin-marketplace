from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_contact_filter_criteria import V3ContactFilterCriteria, V3ContactFilterCriteriaDict


class Contacts(SdkBaseModel):
    include: Optional[V3ContactFilterCriteria] = UNSET
    exclude: Optional[V3ContactFilterCriteria] = UNSET


class ContactsDict(TypedDict):
    include: NotRequired[V3ContactFilterCriteriaDict]
    exclude: NotRequired[V3ContactFilterCriteriaDict]
