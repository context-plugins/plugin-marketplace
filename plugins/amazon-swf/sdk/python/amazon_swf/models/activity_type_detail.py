from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .activity_type_configuration import ActivityTypeConfiguration, ActivityTypeConfigurationDict
from .activity_type_info import ActivityTypeInfo, ActivityTypeInfoDict


class ActivityTypeDetail(SdkBaseModel):
    type_info: ActivityTypeInfo = Field(alias="typeInfo")
    configuration: ActivityTypeConfiguration


class ActivityTypeDetailDict(TypedDict):
    type_info: ActivityTypeInfoDict
    configuration: ActivityTypeConfigurationDict
