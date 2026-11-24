from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HttpData2(SdkBaseModel):
    """Optional. An HTTP URL data source."""

    list_url: Optional[str] = Field(default=UNSET, alias="listUrl")
    """Required. The URL that points to the file that stores the object list entries. This file must allow public
    access. The URL is either an HTTP/HTTPS address (e.g. ``https://example.com/urllist.tsv``) or a Cloud Storage path
    (e.g. ``gs://my-bucket/urllist.tsv``)."""


class HttpData2Dict(TypedDict):
    list_url: NotRequired[str]
