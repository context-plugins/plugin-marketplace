from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IntegrationCategoryResponse(SdkBaseModel):
    """Response for integration categories."""

    categories: list[str]


class IntegrationCategoryResponseDict(TypedDict):
    categories: list[str]
