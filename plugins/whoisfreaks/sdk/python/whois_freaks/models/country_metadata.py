from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CountryMetadata(SdkBaseModel):
    calling_code: Optional[str] = UNSET
    tld: Optional[str] = UNSET
    languages: Optional[list[str]] = UNSET


class CountryMetadataDict(TypedDict):
    calling_code: NotRequired[str]
    tld: NotRequired[str]
    languages: NotRequired[list[str]]
