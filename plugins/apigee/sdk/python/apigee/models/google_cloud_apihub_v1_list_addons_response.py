from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_addon import GoogleCloudApihubV1Addon, GoogleCloudApihubV1AddonDict


class GoogleCloudApihubV1ListAddonsResponse(SdkBaseModel):
    """The ListAddons method's response."""

    addons: Optional[list[GoogleCloudApihubV1Addon]] = UNSET
    """The list of addons."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve the next page of results, or empty if there are no more results in the list."""


class GoogleCloudApihubV1ListAddonsResponseDict(TypedDict):
    addons: NotRequired[list[GoogleCloudApihubV1AddonDict]]
    next_page_token: NotRequired[str]
