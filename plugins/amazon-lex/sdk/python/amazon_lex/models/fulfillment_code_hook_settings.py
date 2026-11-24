from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fulfillment_updates_specification import FulfillmentUpdatesSpecification, FulfillmentUpdatesSpecificationDict
from .post_fulfillment_status_specification import (
    PostFulfillmentStatusSpecification,
    PostFulfillmentStatusSpecificationDict,
)


class FulfillmentCodeHookSettings(SdkBaseModel):
    enabled: bool
    """Indicates whether a Lambda function should be invoked to fulfill a specific intent."""

    post_fulfillment_status_specification: Optional[PostFulfillmentStatusSpecification] = Field(
        default=UNSET, alias="postFulfillmentStatusSpecification"
    )
    fulfillment_updates_specification: Optional[FulfillmentUpdatesSpecification] = Field(
        default=UNSET, alias="fulfillmentUpdatesSpecification"
    )
    active: Optional[bool] = UNSET
    """Determines whether the fulfillment code hook is used. When active is false, the code hook doesn't run."""


class FulfillmentCodeHookSettingsDict(TypedDict):
    enabled: bool
    post_fulfillment_status_specification: NotRequired[PostFulfillmentStatusSpecificationDict]
    fulfillment_updates_specification: NotRequired[FulfillmentUpdatesSpecificationDict]
    active: NotRequired[bool]
