from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_template import PostTemplate, PostTemplateDict


class PostTemplatesGetResponse(SdkBaseModel):
    data: list[PostTemplate]
    """A list of post templates available for this publication."""

    limit: int
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    page: int = 1
    """The page number the results are from. If no page was specified in the request, this defaults to page 1."""

    total_results: int
    """The total number of results from all pages."""

    total_pages: int
    """The total number of pages."""


class PostTemplatesGetResponseDict(TypedDict):
    data: list[PostTemplateDict]
    limit: int
    page: int
    total_results: int
    total_pages: int
