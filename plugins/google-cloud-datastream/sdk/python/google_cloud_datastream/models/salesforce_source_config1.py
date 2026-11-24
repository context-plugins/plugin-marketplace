from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .salesforce_org3 import SalesforceOrg3, SalesforceOrg3Dict
from .salesforce_org4 import SalesforceOrg4, SalesforceOrg4Dict


class SalesforceSourceConfig1(SdkBaseModel):
    """Salesforce data source configuration."""

    exclude_objects: Optional[SalesforceOrg3] = Field(default=UNSET, alias="excludeObjects")
    """The Salesforce objects to exclude from the stream."""

    polling_interval: Optional[str] = Field(default=UNSET, alias="pollingInterval")
    """Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object.
    The duration must be from ``5 minutes`` to ``24 hours``, inclusive."""

    include_objects: Optional[SalesforceOrg4] = Field(default=UNSET, alias="includeObjects")
    """The Salesforce objects to retrieve from the source."""


class SalesforceSourceConfig1Dict(TypedDict):
    exclude_objects: NotRequired[SalesforceOrg3Dict]
    polling_interval: NotRequired[str]
    include_objects: NotRequired[SalesforceOrg4Dict]
