from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1_business_central_administration_center_environments_api import (
    Type1BusinessCentralAdministrationCenterEnvironmentsApiOrStr,
)


class CopyEnvironmentRequest(SdkBaseModel):
    environment_name: str = Field(alias="environmentName")
    """Name for the new environment"""

    type_: Type1BusinessCentralAdministrationCenterEnvironmentsApiOrStr = Field(alias="type")
    """Type of environment to create"""


class CopyEnvironmentRequestDict(TypedDict):
    environment_name: str
    type_: Type1BusinessCentralAdministrationCenterEnvironmentsApiOrStr
