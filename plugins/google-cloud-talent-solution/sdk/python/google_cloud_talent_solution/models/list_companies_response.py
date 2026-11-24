from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict
from .response_metadata1 import ResponseMetadata1, ResponseMetadata1Dict


class ListCompaniesResponse(SdkBaseModel):
    """The List companies response object."""

    companies: Optional[list[Company]] = UNSET
    """Companies for the current client."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve the next page of results."""

    metadata: Optional[ResponseMetadata1] = UNSET
    """Additional information for the API invocation, such as the request tracking id."""


class ListCompaniesResponseDict(TypedDict):
    companies: NotRequired[list[CompanyDict]]
    next_page_token: NotRequired[str]
    metadata: NotRequired[ResponseMetadata1Dict]
