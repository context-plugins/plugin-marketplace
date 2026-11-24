from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .storage_gateway_error import StorageGatewayError, StorageGatewayErrorDict


class ServiceUnavailableErrorError(SdkBaseModel):
    message: Optional[str] = UNSET
    """A human-readable message describing the error that occurred."""

    error: Optional[StorageGatewayError] = UNSET


class ServiceUnavailableErrorErrorDict(TypedDict):
    message: NotRequired[str]
    error: NotRequired[StorageGatewayErrorDict]
