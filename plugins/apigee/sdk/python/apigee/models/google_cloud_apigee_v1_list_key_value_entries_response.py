from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_key_value_entry import (
    GoogleCloudApigeeV1KeyValueEntry,
    GoogleCloudApigeeV1KeyValueEntryDict,
)


class GoogleCloudApigeeV1ListKeyValueEntriesResponse(SdkBaseModel):
    """The request structure for listing key value map keys and its corresponding values."""

    key_value_entries: Optional[list[GoogleCloudApigeeV1KeyValueEntry]] = Field(default=UNSET, alias="keyValueEntries")
    """One or more key value map keys and values."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token that can be sent as ``next_page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApigeeV1ListKeyValueEntriesResponseDict(TypedDict):
    key_value_entries: NotRequired[list[GoogleCloudApigeeV1KeyValueEntryDict]]
    next_page_token: NotRequired[str]
