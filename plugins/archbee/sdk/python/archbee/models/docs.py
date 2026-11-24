from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.privacy import PrivacyOrStr


class Docs(SdkBaseModel):
    """Array of Doc responses"""

    id: Optional[str] = UNSET
    """Archbee id, used for private access"""

    name: Optional[str] = UNSET
    """name of document"""

    url_key: Optional[str] = Field(default=UNSET, alias="urlKey")
    """url of public document, used for public access (if published)"""

    url_alias: Optional[str] = Field(default=UNSET, alias="urlAlias")
    """In case you are migrating from another platform and you’d like to get a redirecting url to your current url, you
    can use this url path."""

    hidden: Optional[bool] = UNSET
    """indicates if document is hidden"""

    privacy: Optional[PrivacyOrStr] = UNSET
    """describes how to access the document via public url (if published)"""

    highlight: Optional[Any] = UNSET
    """text from document, similar with query (word-based search only)"""


class DocsDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    url_key: NotRequired[str]
    url_alias: NotRequired[str]
    hidden: NotRequired[bool]
    privacy: NotRequired[PrivacyOrStr]
    highlight: NotRequired[Any]
