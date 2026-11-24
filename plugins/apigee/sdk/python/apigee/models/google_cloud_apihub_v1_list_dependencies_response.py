from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_dependency import GoogleCloudApihubV1Dependency, GoogleCloudApihubV1DependencyDict


class GoogleCloudApihubV1ListDependenciesResponse(SdkBaseModel):
    """The ListDependencies method's response."""

    dependencies: Optional[list[GoogleCloudApihubV1Dependency]] = UNSET
    """The dependency resources present in the API hub."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListDependenciesResponseDict(TypedDict):
    dependencies: NotRequired[list[GoogleCloudApihubV1DependencyDict]]
    next_page_token: NotRequired[str]
