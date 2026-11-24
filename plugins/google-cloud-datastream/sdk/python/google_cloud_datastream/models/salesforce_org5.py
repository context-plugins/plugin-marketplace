from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg5(SdkBaseModel):
    """Optional. Salesforce organization to enrich with child data objects and metadata."""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrg5Dict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
