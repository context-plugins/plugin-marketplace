from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1GraphQlOperation(SdkBaseModel):
    """Represents the pairing of GraphQL operation types and the GraphQL operation name."""

    operation_types: Optional[list[str]] = Field(default=UNSET, alias="operationTypes")
    """Required. GraphQL operation types. Valid values include ``query`` or ``mutation``. **Note**: Apigee does not
    currently support ``subscription`` types."""

    operation: Optional[str] = UNSET
    """GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the
    quota will be applied to all GraphQL operations irrespective of their operation names in the payload."""


class GoogleCloudApigeeV1GraphQlOperationDict(TypedDict):
    operation_types: NotRequired[list[str]]
    operation: NotRequired[str]
