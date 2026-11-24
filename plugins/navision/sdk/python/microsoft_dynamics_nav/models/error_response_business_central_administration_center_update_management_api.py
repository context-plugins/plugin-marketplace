from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(SdkBaseModel):
    code: Optional[str] = UNSET
    """A stable error code describing the type and nature of the error"""

    message: Optional[str] = UNSET
    """A readable description of the error and cause"""

    target: Optional[str] = UNSET
    """Information about what part of the request caused the error"""

    extension_data: Optional[Any] = Field(default=UNSET, alias="extensionData")
    """Additional key/value information about the error"""

    client_error: Optional[list[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi]] = Field(
        default=UNSET, alias="clientError"
    )
    """Nested list of error objects with more details"""


class ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    target: NotRequired[str]
    extension_data: NotRequired[Any]
    client_error: NotRequired[list[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApiDict]]
