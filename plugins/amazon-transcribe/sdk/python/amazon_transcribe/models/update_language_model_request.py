from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict


class UpdateLanguageModelRequest(SdkBaseModel):
    model_name: str = Field(alias="ModelName")
    """The name of the custom language model you want to update. Model names are case sensitive."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role. If you include EncryptionConfiguration in your request, this role
    must have permissions to access the specified KMS key. If the role that you specify doesn't have the appropriate
    permissions, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path.
    For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")


class UpdateLanguageModelRequestDict(TypedDict):
    model_name: str
    data_access_role_arn: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
