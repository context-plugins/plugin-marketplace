from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.operation import OperationOrStr
from .enums.status_dev_cycle_management_feature_change_requests_api import (
    StatusDevCycleManagementFeatureChangeRequestsApiOrStr,
)
from .feature_details import FeatureDetails, FeatureDetailsDict


class FeatureChangeRequestSummary(SdkBaseModel):
    id: str = Field(alias="_id")
    """A unique Feature ID"""

    project: str = Field(alias="_project")
    """The Project owning the Feature Change Request"""

    feature: str = Field(alias="_feature")
    """The Feature with requested changes"""

    status: StatusDevCycleManagementFeatureChangeRequestsApiOrStr
    """Status of the Feature"""

    operation: OperationOrStr
    """Describes the type of requested change to a feature. example: 'featureUpdate'"""

    description: Optional[str] = UNSET
    """Change Request Description"""

    reviewers: Any
    """a0 users who are requested to review the change"""

    reviews: list[Any]
    """Current Reviewes for the change request"""

    created_by: str = Field(alias="_createdBy")
    """ID of the User who created the Feature"""

    updated_by: Optional[str] = Field(default=UNSET, alias="_updatedBy")
    """ID of the User who last updated the Feature"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """The date the Feature was created"""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """The date the Feature was last updated"""

    feature2: FeatureDetails = Field(alias="feature")


class FeatureChangeRequestSummaryDict(TypedDict):
    id: str
    project: str
    feature: str
    status: StatusDevCycleManagementFeatureChangeRequestsApiOrStr
    operation: OperationOrStr
    description: NotRequired[str]
    reviewers: Any
    reviews: list[Any]
    created_by: str
    updated_by: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    feature2: FeatureDetailsDict
