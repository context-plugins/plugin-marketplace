from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateSendToResponse(SdkBaseModel):
    url: str
    """URL to claim document to get signed."""

    id: UUID
    """Generated send-to document ID"""

    access_code: UUID
    """Access code to be used in for endpoints."""


class CreateSendToResponseDict(TypedDict):
    url: str
    id: UUID
    access_code: UUID
