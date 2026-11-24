from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detail import Detail, DetailDict


class RequestValidationErrorError(SdkBaseModel):
    """FastAPI request-validation error body. Returned with HTTP 422 when a required query parameter is missing or
    malformed. This is a different shape from the ApiError envelope used for service-level errors (which are returned
    with HTTP 200)."""

    detail: Optional[list[Detail]] = UNSET


class RequestValidationErrorErrorDict(TypedDict):
    detail: NotRequired[list[DetailDict]]
