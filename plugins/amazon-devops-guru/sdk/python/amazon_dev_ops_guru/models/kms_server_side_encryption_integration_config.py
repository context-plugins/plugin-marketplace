from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.opt_in_status3 import OptInStatus3OrStr
from .enums.type_amazon_dev_ops_guru_service_integrations_api import TypeAmazonDevOpsGuruServiceIntegrationsApiOrStr


class KmsServerSideEncryptionIntegrationConfig(SdkBaseModel):
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KMSKeyId")
    """Describes the specified KMS key. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When
    using an alias name, prefix it with "alias/". If you specify a predefined Amazon Web Services alias (an Amazon Web
    Services alias with no key ID), Amazon Web Services KMS associates the alias with an Amazon Web Services managed key
    and returns its KeyId and Arn in the response. To specify a KMS key in a different Amazon Web Services account, you
    must use the key ARN or alias ARN. For example: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN:
    arn:aws:kms:us-east-2:111122223333:key/"""

    opt_in_status: Optional[OptInStatus3OrStr] = Field(default=UNSET, alias="OptInStatus")
    """Specifies if DevOps Guru is enabled for KMS integration."""

    type_: Optional[TypeAmazonDevOpsGuruServiceIntegrationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys
    are keys that are owned and managed by DevOps Guru."""


class KmsServerSideEncryptionIntegrationConfigDict(TypedDict):
    kms_key_id: NotRequired[str]
    opt_in_status: NotRequired[OptInStatus3OrStr]
    type_: NotRequired[TypeAmazonDevOpsGuruServiceIntegrationsApiOrStr]
