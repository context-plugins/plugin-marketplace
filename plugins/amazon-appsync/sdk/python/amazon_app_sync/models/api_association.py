from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.association_status import AssociationStatusOrStr


class ApiAssociation(SdkBaseModel):
    domain_name: Optional[str] = Field(default=UNSET, alias="domainName")
    """The domain name."""

    api_id: Optional[str] = Field(default=UNSET, alias="apiId")
    """The API ID."""

    association_status: Optional[AssociationStatusOrStr] = Field(default=UNSET, alias="associationStatus")
    """Identifies the status of an association. PROCESSING: The API association is being created. You cannot modify
    association requests during processing. SUCCESS: The API association was successful. You can modify associations
    after success. FAILED: The API association has failed. You can modify associations after failure."""

    deployment_detail: Optional[str] = Field(default=UNSET, alias="deploymentDetail")
    """Details about the last deployment status."""


class ApiAssociationDict(TypedDict):
    domain_name: NotRequired[str]
    api_id: NotRequired[str]
    association_status: NotRequired[AssociationStatusOrStr]
    deployment_detail: NotRequired[str]
