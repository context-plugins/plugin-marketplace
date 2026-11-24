from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fulfillment_start_response_specification import (
    FulfillmentStartResponseSpecification,
    FulfillmentStartResponseSpecificationDict,
)
from .fulfillment_update_response_specification import (
    FulfillmentUpdateResponseSpecification,
    FulfillmentUpdateResponseSpecificationDict,
)


class FulfillmentUpdatesSpecification(SdkBaseModel):
    active: bool
    """Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent. If the
    active field is set to true, the startResponse, updateResponse, and timeoutInSeconds fields are required."""

    start_response: Optional[FulfillmentStartResponseSpecification] = Field(default=UNSET, alias="startResponse")
    update_response: Optional[FulfillmentUpdateResponseSpecification] = Field(default=UNSET, alias="updateResponse")
    timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="timeoutInSeconds")
    """The length of time that the fulfillment Lambda function should run before it times out."""


class FulfillmentUpdatesSpecificationDict(TypedDict):
    active: bool
    start_response: NotRequired[FulfillmentStartResponseSpecificationDict]
    update_response: NotRequired[FulfillmentUpdateResponseSpecificationDict]
    timeout_in_seconds: NotRequired[int]
