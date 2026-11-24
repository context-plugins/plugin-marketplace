from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .discovery_account import DiscoveryAccount, DiscoveryAccountDict
from .discovery_contact_criteria import DiscoveryContactCriteria, DiscoveryContactCriteriaDict
from .limits import Limits, LimitsDict
from .location import Location, LocationDict
from .required_results_fields import RequiredResultsFields, RequiredResultsFieldsDict


class DiscoveryItem(SdkBaseModel):
    account: Optional[DiscoveryAccount] = UNSET
    """Either companyName or companyWebsite is mandatory"""

    contact: Optional[DiscoveryContactCriteria] = UNSET
    required_results_fields: Optional[RequiredResultsFields] = Field(default=UNSET, alias="requiredResultsFields")
    limits: Optional[Limits] = UNSET
    location: Optional[Location] = UNSET
    external_id: Optional[str] = UNSET


class DiscoveryItemDict(TypedDict):
    account: NotRequired[DiscoveryAccountDict]
    contact: NotRequired[DiscoveryContactCriteriaDict]
    required_results_fields: NotRequired[RequiredResultsFieldsDict]
    limits: NotRequired[LimitsDict]
    location: NotRequired[LocationDict]
    external_id: NotRequired[str]
