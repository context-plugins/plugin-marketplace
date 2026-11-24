from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg1(SdkBaseModel):
    """Salesforce data source objects to avoid backfilling"""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrg1Dict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
