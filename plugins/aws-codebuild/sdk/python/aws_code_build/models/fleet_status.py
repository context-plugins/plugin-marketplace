from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.context import ContextOrStr
from .enums.status_code import StatusCodeOrStr


class FleetStatus(SdkBaseModel):
    status_code: Optional[StatusCodeOrStr] = Field(default=UNSET, alias="statusCode")
    """The status code of the compute fleet. Valid values include: CREATING: The compute fleet is being created.
    UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is being rotated. PENDING_DELETION: The
    compute fleet is pending deletion. DELETING: The compute fleet is being deleted. CREATE_FAILED: The compute fleet
    has failed to create. UPDATE_ROLLBACK_FAILED: The compute fleet has failed to update and could not rollback to
    previous state. ACTIVE: The compute fleet has succeeded and is active."""

    context: Optional[ContextOrStr] = UNSET
    """Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute fleet has failed
    to create. UPDATE_FAILED: The compute fleet has failed to update."""

    message: Optional[str] = UNSET
    """A message associated with the status of a compute fleet."""


class FleetStatusDict(TypedDict):
    status_code: NotRequired[StatusCodeOrStr]
    context: NotRequired[ContextOrStr]
    message: NotRequired[str]
