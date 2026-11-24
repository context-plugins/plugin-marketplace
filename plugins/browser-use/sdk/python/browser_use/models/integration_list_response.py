from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .integration_response import IntegrationResponse, IntegrationResponseDict


class IntegrationListResponse(SdkBaseModel):
    """Paginated response for integrations list."""

    integrations: list[IntegrationResponse]
    total: int
    limit: int
    offset: int


class IntegrationListResponseDict(TypedDict):
    integrations: list[IntegrationResponseDict]
    total: int
    limit: int
    offset: int
