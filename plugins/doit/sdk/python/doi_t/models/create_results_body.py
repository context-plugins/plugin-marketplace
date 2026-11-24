from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .insight_request import InsightRequest, InsightRequestDict


class CreateResultsBody(SdkBaseModel):
    """Request body for creating or updating multiple insights in a batch."""

    results: list[InsightRequest]
    """List of insights to create or update."""


class CreateResultsBodyDict(TypedDict):
    results: list[InsightRequestDict]
