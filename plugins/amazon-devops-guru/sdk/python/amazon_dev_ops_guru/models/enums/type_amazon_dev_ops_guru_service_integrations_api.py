from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonDevOpsGuruServiceIntegrationsApi(str, Enum):
    """The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys
    are keys that are owned and managed by DevOps Guru."""

    CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY"
    AWS_OWNED_KMS_KEY = "AWS_OWNED_KMS_KEY"

    __str__ = str.__str__


TypeAmazonDevOpsGuruServiceIntegrationsApiOrStr: TypeAlias = Annotated[
    TypeAmazonDevOpsGuruServiceIntegrationsApi | str, open_enum_validator(TypeAmazonDevOpsGuruServiceIntegrationsApi)
]
