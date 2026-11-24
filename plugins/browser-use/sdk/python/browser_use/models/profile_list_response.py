from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .profile_view import ProfileView, ProfileViewDict


class ProfileListResponse(SdkBaseModel):
    """Response model for paginated profile list requests."""

    items: list[ProfileView]
    """List of profile views for the current page"""

    total_items: int = Field(alias="totalItems")
    """Total number of items in the list"""

    page_number: int = Field(alias="pageNumber")
    """Page number"""

    page_size: int = Field(alias="pageSize")
    """Number of items per page"""


class ProfileListResponseDict(TypedDict):
    items: list[ProfileViewDict]
    total_items: int
    page_number: int
    page_size: int
