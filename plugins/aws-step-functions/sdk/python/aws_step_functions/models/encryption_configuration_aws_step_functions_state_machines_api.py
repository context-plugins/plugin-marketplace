from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_aws_step_functions_state_machines_api import Type1AwsStepFunctionsStateMachinesApiOrStr


class EncryptionConfigurationAwsStepFunctionsStateMachinesApi(SdkBaseModel):
    kms_key_id: Optional[str] = Field(default=UNSET, alias="kmsKeyId")
    """An alias, alias ARN, key ID, or key ARN of a symmetric encryption KMS key to encrypt data. To specify a KMS key
    in a different Amazon Web Services account, you must use the key ARN or alias ARN."""

    kms_data_key_reuse_period_seconds: Optional[int] = Field(default=UNSET, alias="kmsDataKeyReusePeriodSeconds")
    """Maximum duration that Step Functions will reuse data keys. When the period expires, Step Functions will call
    GenerateDataKey. Only applies to customer managed keys."""

    type_: Type1AwsStepFunctionsStateMachinesApiOrStr = Field(alias="type")
    """Encryption type"""


class EncryptionConfigurationAwsStepFunctionsStateMachinesApiDict(TypedDict):
    kms_key_id: NotRequired[str]
    kms_data_key_reuse_period_seconds: NotRequired[int]
    type_: Type1AwsStepFunctionsStateMachinesApiOrStr
