from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_object import SalesforceObject, SalesforceObjectDict


class SalesforceOrg(SdkBaseModel):
    """Salesforce organization structure."""

    objects: Optional[list[SalesforceObject]] = UNSET
    """Salesforce objects in the database server."""


class SalesforceOrgDict(TypedDict):
    objects: NotRequired[list[SalesforceObjectDict]]
