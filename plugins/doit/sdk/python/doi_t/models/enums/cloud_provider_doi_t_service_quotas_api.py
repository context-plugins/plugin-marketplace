from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloudProviderDoiTServiceQuotasApi(str, Enum):
    """Cloud provider that owns the quota."""

    AWS = "aws"
    GCP = "gcp"

    __str__ = str.__str__


CloudProviderDoiTServiceQuotasApiOrStr: TypeAlias = Annotated[
    CloudProviderDoiTServiceQuotasApi | str, open_enum_validator(CloudProviderDoiTServiceQuotasApi)
]
