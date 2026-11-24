from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg2(SdkBaseModel):
    """Enriched Salesforce organization."""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrg2Dict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
