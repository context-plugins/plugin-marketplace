from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_dev_cycle_management_variables_api import TypeDevCycleManagementVariablesApiOrStr
from .variable_validation_entity import VariableValidationEntity, VariableValidationEntityDict


class UpdateVariableDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Variable name"""

    description: Optional[str] = UNSET
    """A description of the Variable"""

    key: Optional[str] = UNSET
    """Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    type_: Optional[TypeDevCycleManagementVariablesApiOrStr] = Field(default=UNSET, alias="type")
    """The type of Variable. Must be one of [String | Boolean | Number | JSON]"""

    validation_schema: Optional[VariableValidationEntity] = Field(default=UNSET, alias="validationSchema")
    """Validation schema for variable values"""

    persistent: Optional[bool] = UNSET
    """Boolean indicating if the variable is intended to be long-lived within a feature"""

    tags: Optional[list[str]] = UNSET
    """Tags to organize Variables on the dashboard"""


class UpdateVariableDtoDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    key: NotRequired[str]
    type_: NotRequired[TypeDevCycleManagementVariablesApiOrStr]
    validation_schema: NotRequired[VariableValidationEntityDict]
    persistent: NotRequired[bool]
    tags: NotRequired[list[str]]
