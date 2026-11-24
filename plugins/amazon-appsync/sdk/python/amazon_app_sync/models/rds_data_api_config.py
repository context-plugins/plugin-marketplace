from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RdsDataApiConfig(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The resource ARN of the RDS cluster."""

    secret_arn: str = Field(alias="secretArn")
    """The secret's ARN that was obtained from Secrets Manager. A secret consists of secret information, the secret
    value, plus metadata about the secret. A secret value can be a string or binary. It typically includes the ARN,
    secret name and description, policies, tags, encryption key from the Key Management Service, and key rotation
    data."""

    database_name: str = Field(alias="databaseName")
    """The name of the database in the cluster."""


class RdsDataApiConfigDict(TypedDict):
    resource_arn: str
    secret_arn: str
    database_name: str
