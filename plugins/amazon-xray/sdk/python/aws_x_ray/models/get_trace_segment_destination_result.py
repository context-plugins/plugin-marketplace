from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.destination import DestinationOrStr
from .enums.status_aws_x_ray_operations_api import StatusAwsXRayOperationsApiOrStr


class GetTraceSegmentDestinationResult(SdkBaseModel):
    destination: Optional[DestinationOrStr] = Field(default=UNSET, alias="Destination")
    """Retrieves the current destination."""

    status: Optional[StatusAwsXRayOperationsApiOrStr] = Field(default=UNSET, alias="Status")
    """Status of the retrieval."""


class GetTraceSegmentDestinationResultDict(TypedDict):
    destination: NotRequired[DestinationOrStr]
    status: NotRequired[StatusAwsXRayOperationsApiOrStr]
