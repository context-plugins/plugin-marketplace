from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.source1 import Source1OrStr
from .enums.status2 import Status2OrStr
from .enums.type3_dev_cycle_management_metric_associations_api import Type3DevCycleManagementMetricAssociationsApiOrStr
from .variable_validation_entity import VariableValidationEntity, VariableValidationEntityDict


class VariableDevCycleManagementMetricAssociationsApi(SdkBaseModel):
    name: Optional[str] = UNSET
    """Variable name"""

    description: Optional[str] = UNSET
    """A description of the Variable"""

    key: str
    """Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    id: str = Field(alias="_id")
    """A unique Variable ID"""

    project: str = Field(alias="_project")
    """The ID of the Project this Variable belongs to"""

    feature: Optional[str] = Field(default=UNSET, alias="_feature")
    """The ID of the Feature this Variable belongs to"""

    type_: Type3DevCycleManagementMetricAssociationsApiOrStr = Field(alias="type")
    """The type of Variable. Must be one of [String | Boolean | Number | JSON]"""

    status: Status2OrStr
    """The status of a Variable. Must be one of [active | archived]"""

    source: Source1OrStr
    """The system that was used for the creation of the Variable."""

    created_by: Optional[str] = Field(default=UNSET, alias="_createdBy")
    """ID of the User who created the Variable."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Variable was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Variable was last updated"""

    validation_schema: Optional[VariableValidationEntity] = Field(default=UNSET, alias="validationSchema")
    """Validation schema for variable values"""

    persistent: Optional[bool] = UNSET
    """Boolean indicating if the variable is intended to be long-lived within a feature"""

    tags: Optional[list[str]] = UNSET
    """Tags to organize Variables on the dashboard"""


class VariableDevCycleManagementMetricAssociationsApiDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    key: str
    id: str
    project: str
    feature: NotRequired[str]
    type_: Type3DevCycleManagementMetricAssociationsApiOrStr
    status: Status2OrStr
    source: Source1OrStr
    created_by: NotRequired[str]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    validation_schema: NotRequired[VariableValidationEntityDict]
    persistent: NotRequired[bool]
    tags: NotRequired[list[str]]
