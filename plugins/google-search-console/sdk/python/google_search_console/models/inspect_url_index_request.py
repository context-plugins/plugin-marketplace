from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InspectUrlIndexRequest(SdkBaseModel):
    """Index inspection request."""

    site_url: Optional[str] = Field(default=UNSET, alias="siteUrl")
    """Required. The URL of the property as defined in Search Console. **Examples:** ``http://www.example.com/`` for a
    URL-prefix property, or ``sc-domain:example.com`` for a Domain property."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Optional. An `IETF BCP-47 <https://en.wikipedia.org/wiki/IETF_language_tag>`__ language code representing the
    requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US"."""

    inspection_url: Optional[str] = Field(default=UNSET, alias="inspectionUrl")
    """Required. URL to inspect. Must be under the property specified in "site_url"."""


class InspectUrlIndexRequestDict(TypedDict):
    site_url: NotRequired[str]
    language_code: NotRequired[str]
    inspection_url: NotRequired[str]
