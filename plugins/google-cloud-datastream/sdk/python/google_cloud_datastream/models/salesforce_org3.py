from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg3(SdkBaseModel):
    """The Salesforce objects to exclude from the stream."""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrg3Dict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
