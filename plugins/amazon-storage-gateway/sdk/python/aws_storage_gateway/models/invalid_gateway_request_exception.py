from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .storage_gateway_error import StorageGatewayError, StorageGatewayErrorDict


class InvalidGatewayRequestException(SdkBaseModel):
    message: Optional[str] = UNSET
    """A human-readable message describing the error that occurred."""

    error: Optional[StorageGatewayError] = UNSET


class InvalidGatewayRequestExceptionDict(TypedDict):
    message: NotRequired[str]
    error: NotRequired[StorageGatewayErrorDict]
