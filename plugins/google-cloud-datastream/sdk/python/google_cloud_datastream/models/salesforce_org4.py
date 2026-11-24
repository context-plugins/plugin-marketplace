from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg4(SdkBaseModel):
    """The Salesforce objects to retrieve from the source."""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrg4Dict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
