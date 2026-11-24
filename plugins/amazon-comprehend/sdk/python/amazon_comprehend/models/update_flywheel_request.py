from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_data_security_config import UpdateDataSecurityConfig, UpdateDataSecurityConfigDict


class UpdateFlywheelRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel to update."""

    active_model_arn: Optional[str] = Field(default=UNSET, alias="ActiveModelArn")
    """The Amazon Resource Number (ARN) of the active model version."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel
    data."""

    data_security_config: Optional[UpdateDataSecurityConfig] = Field(default=UNSET, alias="DataSecurityConfig")


class UpdateFlywheelRequestDict(TypedDict):
    flywheel_arn: str
    active_model_arn: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    data_security_config: NotRequired[UpdateDataSecurityConfigDict]
